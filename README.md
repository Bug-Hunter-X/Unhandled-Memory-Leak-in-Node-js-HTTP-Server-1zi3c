# Unhandled Memory Leak in Node.js HTTP Server

This repository demonstrates a common, yet easily overlooked, error in Node.js: an unhandled memory leak in an HTTP server.  The server fails to properly close connections, leading to resource exhaustion over time.  The solution shows how to correctly handle connections to prevent this issue.