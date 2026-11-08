# MCP server

The desktop app has a built-in [MCP](https://modelcontextprotocol.io) server. AI clients such as Claude Code, Cursor and OpenCode use it to read your dumps, queries, logs, jobs and mails.

## Enable the server

1. Open **Settings → MCP Server**.
2. Turn on **Native (Streamable HTTP)**.
3. Note the port (default `3002`).

**Limit Payload objects** sets how many of the latest items each tool returns. The default is `10`.

## Connect a client

The endpoint is `http://127.0.0.1:3002/mcp`. Use your own port if you changed it.

:::tabs
== Claude Code
```bash
claude mcp add laradumps http://127.0.0.1:3002/mcp --transport http
```

== Cursor
```json
{
  "mcpServers": {
    "laradumps": {
      "url": "http://127.0.0.1:3002/mcp"
    }
  }
}
```

== OpenCode
```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "LaraDumps": {
      "type": "remote",
      "url": "http://127.0.0.1:3002/mcp"
    }
  }
}
```
:::

Restart the client. The LaraDumps tools, such as `get_logs` and `get_queries`, should appear in a new chat.

For clients that launch a process, the **Stdio Command** field in the same settings tab shows a ready-to-copy command: `node <app path>/dist/mcp-server.js --port=<port>`.

## Tools

Tools that take a `limit` return the latest items, up to that number.

| Tool | Description |
|---|---|
| `get_dumps` | Captured dumps. |
| `get_queries` | Captured SQL queries. |
| `get_problematic_queries` | Duplicate queries and queries with `EXPLAIN` nodes. |
| `get_logs` | Captured logs: id, level, message, context, date. |
| `get_log_details` | One log, by `log_id`. |
| `summarize_logs` | The last 50 logs. |
| `get_jobs` | Captured jobs. |
| `get_mails` | Captured mails, metadata only. |
| `get_mail` | One mail, by `message_id`. `include` selects `meta`, `text`, `html`, `headers`, `details`, `attachments` or `attachment_bodies`. |
| `get_livewire_components` | Captured Livewire components. |
| `get_brains` | Collected Brains data. |
| `get_project_info` | Current project information. |
| `analyze_profiler` | Slowest profiler entries. Filter with `route`, `min_total_ms` and `limit`. |
| `toggle_env` | `enable`, `disable` or `toggle` a watcher (`queries`, `logs`, `jobs`, `cache`, `http`, `livewire`). |
| `clear_dumps`, `clear_jobs`, `clear_mails`, `clear_logs` | Clear captured data. |
| `confetti` | Fire a confetti animation in the app. |

## Prompts

- `analyze_last_exception`: sends the latest `error`, `critical`, `emergency` or `alert` log to the AI and asks for a fix.
- `optimize_latest_query`: sends the latest SQL query to the AI and asks for optimizations.

## Example requests

| You ask | Used |
|---|---|
| "Does my last query have an N+1 problem?" | `get_queries`, `optimize_latest_query` |
| "What caused the last error?" | `get_logs`, `analyze_last_exception` |
| "Which routes are slow?" | `analyze_profiler` |
| "Stop watching queries." | `toggle_env` |

## Troubleshooting

If the client cannot connect:

- Check that the app is running and the MCP server is enabled.
- Check that the port in the client matches **Settings → MCP Server**.
- Check that the URL ends in `/mcp`.
- Restart the client and start a new chat.

Test the endpoint with `curl http://127.0.0.1:3002/mcp`. A `400` response means the server is up, because it expects an MCP `initialize` request.

If tools return empty data, check that your app is sending data and that the matching watcher is enabled.

::: warning
The server listens on `127.0.0.1` only and rejects requests whose `Host` header is not localhost. It has no authentication, so do not expose the port.
:::
