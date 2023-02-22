# Kyndryl Design System - Web Components

[![kyndryl-web-components](https://github.kyndryl.net/kyndryl-design-system/web-components/actions/workflows/actions.yml/badge.svg)](https://github.kyndryl.net/kyndryl-design-system/web-components/actions/workflows/actions.yml)

# Contributing to this project

Read the [Contributing Guide](CONTRIBUTING.md) here.

# Using this library in another project

## Configure your environments to enable installation of packages from the GitHub Enterprise npm package registry.

This is necessary as long as we serve our packages from a private registry. Eventually we will probably move public and will be able to skip this.

1. Create a [Personal Access Token](https://github.kyndryl.net/settings/tokens) with `read:packages` permission.
   1. Save the generated token somewhere safe for the next steps.
   2. Do NOT commit this secret to your project repository.
2. Create a `.npmrc` file in your project root with the following content:

```
//npm.github.kyndryl.net/:_authToken=${GH_TOKEN_PACKAGES}
@kyndryl-design-system:registry=https://npm.github.kyndryl.net
```

3. Local Dev: Set up the Personal Access Token in your local environment.
   1. Add this step to your project's README.
   1. Create an environment variable, named `GH_TOKEN_PACKAGES`, for whichever os/shell you are using locally.
      1. Git Bash example: Add a `.bashrc` file to your user home directory with the content: `export GH_TOKEN_PACKAGES=<your-token-here>`
      1. You will have to restart your shell/terminal after.
4. Automated Builds: Set up the Personal Access Token in your CI environment. This example is for GitHub Actions.

   1. Create a new repository secret at: `https://github.kyndryl.net/<your-project-path>/settings/secrets/actions/new`
   1. Name the token `GH_TOKEN_PACKAGES`.
   1. Paste in the token you generated previously to the Secret field.
   1. Update your actions workflow file (.yml) to use the new secret/env var:

   ```yml
   env:
     GH_TOKEN_PACKAGES: '${{ secrets.GH_TOKEN_PACKAGES }}'
   ```

## Install the package

Note: This will not work until you have configured the enterprise package registry following the instructions above.

```bash
# stable/main
npm install @kyndryl-design-system/web-components -S

# beta (use until first stable release)
npm install @kyndryl-design-system/web-components@beta -S
```

## Import the root.css to your app's global styles

The method used (JS Import, CSS import, or &lt;style&gt; tag) will vary based on your framework/bundler, but the stylesheet can be found in `node_modules` at:

```
@kyndryl-design-system/web-components/root.css
```

## Start using components

See [Storybook](https://pages.github.kyndryl.net/kyndryl-design-system/web-components/) for the full components documentation.

**Example:**

```js
import { Button } from '@kyndryl-design-system/web-components';
```

```html
<kyn-button>Button</kyn-button>
```
