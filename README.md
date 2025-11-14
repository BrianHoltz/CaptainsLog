# CaptainsLog (Spring Boot Skeleton)

This is a minimal Spring Boot skeleton to get you started.

Quick commands (macOS / zsh):

Build and run tests:

```bash
mvn -q test
```

Run the application:

```bash
mvn spring-boot:run
```

Then open http://localhost:8080/api/hello

Notes:
- Uses Java 17 and Spring Boot 3.x
- If you don't have Maven installed, install it (Homebrew: `brew install maven`).

## Development (auto-reload)

This project includes `spring-boot-devtools` to enable automatic restart when server-side code or templates change, and LiveReload for browser auto-refresh of static assets.

Run with Maven (DevTools is on the runtime classpath):

```bash
# use your local Maven
mvn spring-boot:run
```

What DevTools does for you:
- Automatically restarts the Spring application when classpath files change (Java sources recompiled by your IDE).
- Provides a LiveReload server on port 35729. If you install a LiveReload browser extension (or use an editor/IDE that supports LiveReload), your browser will refresh when static assets change.

IDE tips (IntelliJ IDEA):
- Enable "Build project automatically": Preferences → Advanced Settings → Build project automatically.
- Enable the compiler to make changes visible: press `Ctrl+Shift+A` (or `Cmd+Shift+A` on macOS), search "Registry..." and enable `compiler.automake.allow.when.app.running`.
- Use `mvn spring-boot:run` from a terminal or run the `CaptainsLogApplication` run configuration. When you change Java code, IntelliJ will compile it; DevTools will trigger a restart.

If you prefer not to install Maven locally, use Docker to build and run (see previous section).
