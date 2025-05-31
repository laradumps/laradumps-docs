<script lang="ts" setup>
import { useStorage } from '@vueuse/core'

const contributors = useStorage<any[]>('contributors', [])

const fromRepo = (repo: string) =>
    fetch(`https://api.github.com/repos/laradumps/${repo}/contributors`)
        .then((res) => res.json())
        .catch(() => [])

const getContributors = async () => {
  const users = await Promise.all([
    fromRepo('app'),
    fromRepo('laradumps'),
    fromRepo('laradumps-core'),
    fromRepo('laradumps-docs'),
    fromRepo('global-laradumps'),
    fromRepo('homebrew-app'),
  ])

  contributors.value = users.reduce((acc, data = []) => {
    if (!Array.isArray(data)) {
      return acc
    }

    return [...acc, ...data.filter(i => i.login)]
  }, []).reduce((acc, user) => {
    const existingUser = acc.find(u => u.id === user.id)

    if (existingUser) {
      existingUser.contributions += user.contributions
      return acc
    }

    return [...acc, {
      id: user.id,
      username: user.login,
      contributions: user.contributions,
      avatar_url: user.avatar_url
    }]
  }, [])
}

getContributors()
</script>

<template>
  <div class="text-lg text-center leading-7 my-10 px-5">
    <div class="flex flex-wrap gap-2">
      <a
          v-for="contributor of contributors"
          :key="contributor.id"
          v-tooltip="contributor.username"
          :href="`https://github.com/${contributor.username}`"
          :aria-label="contributor.username"
          rel="noopener noreferrer"
          target="_blank"
      >
        <img
            :src="contributor.avatar_url"
            :alt="contributor.username"
            :aria-label="contributor.username"
            loading="lazy"
            width="50"
            height="50"
            class="w-15 h-15 min-w-15 min-h-15 !rounded-full"
        />
      </a>
    </div>
  </div>
</template>
