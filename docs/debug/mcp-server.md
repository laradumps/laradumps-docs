# MCP Server

## Overview

The LaraDumps MCP (Model Context Protocol) Server is built into the LaraDumps Desktop Application and provides AI-powered debugging capabilities by exposing debugging data through the Model Context Protocol. This allows **Cursor**, **OpenCode**, and other MCP-compatible AI models to access debugging information about your Laravel application in real-time.

The MCP Server runs in **HTTP/SSE mode** through LaraDumps Settings, making it easy to connect with these clients.

## 1. Getting Started

Follow these steps to set up the LaraDumps MCP Server with your AI editor.

### 2. Enable the MCP Server

1. Open **LaraDumps Desktop Application**
2. Go to **Settings → MCP Server** tab
3. Toggle **Enable MCP Server**
4. Note the port number (default: `3000`)

### 3. Limit Payload Objects
Controls the maximum number of items returned by each tool call (logs, queries, dumps, etc.).

**Configure in:** LaraDumps → Settings → MCP Server → Limit Payload objects  
**Default:** `300`  
**Purpose:** Prevents overwhelming AI models with too much data at once.

### Configure Your Client

#### Cursor

1. Open **Cursor Settings** (cmd + ,)
2. Go to **Features > MCP**
3. Click **Add New MCP Server**
4. This will open the `mcp.json` file. Add the following configuration:

```json
{
  "mcpServers": {
    "laradumps": {
      "url": "http://127.0.0.1:3000/sse",
      "type": "sse"
    }
  }
}
```

(Replace `3000` with your configured port if your port differs)

#### OpenCode

Add the following configuration to your `mcpServers` settings:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "LaraDumps": {
      "type": "remote",
      "url": "http://127.0.0.1:3000/sse"
    }
  }
}
```

### Verify Connection

1. Restart your editor (Cursor or OpenCode) to apply changes.
2. Open a chat with the AI.
3. You should see LaraDumps tools available (e.g., `get_logs`, `get_queries`).

## Configuration Details

### Port Configuration
The MCP Server port is configured through **LaraDumps → Settings → MCP Server**.
Default: `3000`.

### API Base URL
The MCP server communicates internally with LaraDumps via `http://0.0.0.0:9191/api/mcp`.

## Available Tools

### Retrieval Tools

| Tool Name                 | Description                                                                |
|---------------------------|----------------------------------------------------------------------------|
| `get_jobs`                | Retrieve all captured background jobs from your Laravel application.       |
| `get_brains`              | Get collected "Brains" data (insights and debugging metadata).             |
| `get_dumps`               | Get all captured variable dumps.                                           |
| `get_project_info`        | Retrieve metadata including PHP version, Laravel version, and environment. |
| `get_mails`               | Get all captured emails sent by your application.                          |
| `get_livewire_components` | Get all registered Livewire components in your application.                |
| `get_queries`             | Retrieve captured SQL queries. Supports `limit` parameter.                 |
| `get_logs`                | Get a summary of all captured application logs.                            |
| `get_log_details`         | Retrieve full details of a specific log entry by `log_id`.                 |
| `summarize_logs`          | Get a summary of the last 50 application logs.                             |

### Action Tools

| Tool Name                 | Description                                                                |
|---------------------------|----------------------------------------------------------------------------|
| `confetti`                | Trigger confetti animation in the LaraDumps desktop application.           |
| `clear_jobs`              | Clear all captured background jobs from memory.                            |
| `clear_mails`             | Clear all captured emails from the dashboard.                              |
| `clear_logs`              | Clear all captured application logs.                                       |
| `clear_dumps`             | Clear all captured variable dumps.                                         |
| `toggle_env`              | Enable, disable, or toggle an environment/watcher (e.g. queries, logs, cache). |

## Available Prompts

Prompts are pre-configured AI interactions that gather relevant debugging data and present it to the AI model for analysis.

### `analyze_last_exception`

Analyzes the most recent error or exception in your application logs.

**Behavior:**
- Fetches all logs
- Filters for error-level logs (error, critical, emergency, alert)
- Presents the most recent error to the AI for analysis
- Prompts the AI to suggest fixes

**Example Use Case:** Quickly understand what caused an error and get AI-powered solutions.

### `optimize_latest_query`

Analyzes the most recent SQL query for performance optimization.

**Behavior:**
- Fetches all captured queries
- Extracts the latest query
- Provides the query to the AI for performance analysis
- Prompts the AI to suggest optimization strategies

**Example Use Case:** Identify N+1 queries, missing indexes, or inefficient SQL patterns.

## Common Commands

### 1. Real-time Code Analysis

Use Cursor or OpenCode with MCP to analyze your latest queries and logs as you're developing:

```text
"Analyze my last query and tell me if there are any N+1 problems"
→ Uses `get_queries` and `optimize_latest_query` prompt
```

### 2. Error Debugging
Quickly understand what went wrong:

```text
"What caused the last error in my application?"
→ Uses `get_logs` and `analyze_last_exception` prompt
```

### 3. Performance Optimization
Get AI-powered suggestions for improving your application:

```text
"Are my background jobs running efficiently?"
→ Uses `get_jobs` and `get_project_info` tools
```

### 4. Monitoring Control
Enable/disable specific monitoring features through AI:

```text
"Stop monitoring queries for now"
→ Uses `toggle_env` tool with queries
```

### 5. Project Understanding
Get comprehensive project information:

```text
"What's running in my Laravel application?"
→ Uses `get_project_info`, `get_livewire_components`, `get_mails`
```

## Environment Variables

The MCP server respects the following environment configuration:

| Variable | Purpose                | Default                       |
|----------|------------------------|-------------------------------|
| API_BASE | LaraDumps API endpoint | `http://0.0.0.0:9191/api/mcp` |

## Performance Considerations

- **Query Limits:** The `get_queries` tool limits to 50 results by default to avoid overwhelming data transfer
- **Real-time Updates:** Each tool call fetches fresh data from LaraDumps
- **Response Sizes:** Large responses (many logs/queries) may take longer to process
- **Network Latency:** Minimal overhead for local HTTP connections

## Troubleshooting

### MCP Server Not Connecting

**Problem:** The client doesn't see the LaraDumps MCP Server.

**Solution:**
1. Verify the MCP Server is enabled in **LaraDumps → Settings → MCP Server**
2. Check the port number matches your client config
3. Ensure the URL in your config is `http://127.0.0.1:PORT/sse`
4. Restart your editor (Cursor/OpenCode)
5. Try starting a new conversation

### Connection Refused Error

**Problem:** "Connection refused" when trying to connect.

**Solution:**
1. Make sure the LaraDumps desktop app is running
2. Verify MCP Server is enabled in Settings
3. Confirm the port number is correct
4. Test locally: `curl http://127.0.0.1:3000/sse` (replace 3000 with your port)

### No Data Returned

**Problem:** Tools run but return empty results.

**Solution:**
1. Verify your Laravel app is sending data to LaraDumps
2. Check that you have enabled monitoring for the data types you want
3. Look in the LaraDumps desktop app to see if data is being captured

### Tools Aren't Responding

**Problem:** The client calls tools but receives a timeout or no response.

**Solution:**
1. Ensure the MCP Server is enabled in LaraDumps Settings
2. Verify your Laravel app is running and sending data
3. Wait 10 seconds after restarting your editor
4. Try starting a new conversation
