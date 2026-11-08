<script setup>
// HTML mock of the app window: stays current with the docs, unlike a screenshot.
defineProps({
    code: { type: String, default: "ds($user->only('id', 'name'));" },
    file: { type: String, default: 'UserController.php:24' },
    type: { type: String, default: 'dump' },
    // plain-text body; slot content would miss this component's scoped styles
    output: { type: String, default: '' },
})
</script>

<template>
    <figure class="dump-preview" role="img" aria-label="LaraDumps app showing the dump sent by ds()">
        <pre class="dp-code" aria-hidden="true"><code>{{ code }}</code></pre>
        <div class="dp-window" aria-hidden="true">
            <div class="dp-bar">
                <span></span><span></span><span></span>
                <strong>LaraDumps</strong>
            </div>
            <div class="dp-tabs">
                <b>Home <small>1</small></b>
                <span>Queries</span>
                <span>Logs</span>
                <span>Jobs</span>
            </div>
            <div class="dp-entry">
                <div class="dp-meta">
                    <span>{{ file }}</span>
                    <em>{{ type }}</em>
                </div>
                <pre v-if="output" class="dp-body">{{ output }}</pre>
                <slot v-else>
<pre class="dp-body"><span class="k">array:2</span> [
  <span class="s">"id"</span> => <span class="n">42</span>
  <span class="s">"name"</span> => <span class="s">"Taylor"</span>
]</pre>
                </slot>
            </div>
        </div>
    </figure>
</template>

<style scoped>
.dump-preview {
    margin: 0 auto;
    width: 100%;
    max-width: 420px;
    text-align: left;
    font-family: var(--vp-font-family-mono);
    font-size: 13px;
}
.vp-doc .dump-preview {
    margin: 24px 0;
    max-width: 460px;
}
.dp-code {
    margin: 0 0 12px;
    padding: 10px 14px;
    border-radius: 8px;
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
    color: var(--vp-c-text-1);
    overflow-x: auto;
}
.dp-window {
    position: relative;
    border-radius: 12px;
    border: 1px solid #2b313c;
    background: #14171d;
    color: #e6e9ef;
    box-shadow: 0 24px 60px -12px rgba(0, 0, 0, 0.35), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
    overflow: hidden;
}
.dp-bar {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 12px;
    border-bottom: 1px solid #2b313c;
}
.dp-bar span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}
.dp-bar span:nth-child(1) { background: #ff5f57; }
.dp-bar span:nth-child(2) { background: #febc2e; }
.dp-bar span:nth-child(3) { background: #28c840; }
.dp-bar strong {
    flex: 1;
    text-align: center;
    margin-right: 42px;
    font-family: var(--vp-font-family-base);
    font-size: 12px;
    font-weight: 500;
    color: #9aa3b2;
}
.dp-tabs {
    display: flex;
    gap: 16px;
    padding: 10px 14px 0;
    font-family: var(--vp-font-family-base);
    color: #9aa3b2;
}
.dp-tabs b {
    color: #e6e9ef;
    font-weight: 500;
    padding-bottom: 8px;
    border-bottom: 2px solid #e6b800;
}
.dp-tabs small {
    margin-left: 4px;
    padding: 0 6px;
    border-radius: 999px;
    background: #2b313c;
    font-size: 10px;
    color: #e6e9ef;
}
.dp-entry {
    margin: 10px 12px 14px;
    padding: 10px 12px;
    border-radius: 10px;
    border: 1px solid #2b313c;
    background: #1c2028;
}
.dp-meta {
    display: flex;
    justify-content: space-between;
    color: #9aa3b2;
    font-size: 12px;
    margin-bottom: 8px;
}
.dp-meta em {
    font-style: normal;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 0.05em;
    padding: 1px 8px;
    border-radius: 999px;
    background: #2b313c;
}
.dp-body {
    margin: 0;
    padding: 0;
    background: none;
    font: inherit;
    line-height: 1.6;
    white-space: pre;
    color: inherit;
}
.k { color: #9aa3b2; }
.s { color: #7ec699; }
.n { color: #f2c230; }
</style>
