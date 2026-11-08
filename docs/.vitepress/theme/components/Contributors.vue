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
    fromRepo('homebrew-app'),
  ])

  const merged = users.reduce((acc, data = []) => {
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

  // keep the cached list when GitHub rate-limits every request
  if (merged.length) contributors.value = merged.sort((a, b) => b.contributions - a.contributions)
}

getContributors()
</script>

<template>
  <div class="my-6">
    <div class="flex flex-wrap gap-1.5">
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
            width="40"
            height="40"
            class="w-10 h-10 rounded-full"
        />
      </a>
    </div>
  </div>
</template>
