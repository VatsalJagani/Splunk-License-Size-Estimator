# GitHub Pages Deployment Guide

This document provides instructions for deploying the Splunk License Size Estimator to GitHub Pages at https://license.splk.in.

## Deployment Steps

### 1. Enable GitHub Pages

1. Go to the repository Settings
2. Navigate to "Pages" in the left sidebar
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. Save the settings

### 2. DNS Configuration

The site is configured to use the custom domain `license.splk.in`. The following DNS configuration is required:

#### DNS Records Needed:

Add a CNAME record in your DNS provider (where splk.in is hosted):

```
Type:  CNAME
Name:  license
Value: vatsaljagani.github.io.
TTL:   3600 (or default)
```

**Note**: Based on the existing deployment at https://interest-calculator.splk.in, the DNS configuration for the `splk.in` domain should already be in place. You just need to add the CNAME record for the `license` subdomain.

#### To verify DNS configuration:

```bash
# Check if the CNAME record is set up correctly
nslookup license.splk.in

# Or use dig
dig license.splk.in CNAME
```

### 3. Verify Deployment

After the GitHub Actions workflow runs successfully:

1. Check the Actions tab to ensure the deployment workflow completed
2. Visit https://license.splk.in to verify the site is accessible
3. Test the calculator functionality by:
   - Selecting data sources (Windows Servers, Firewalls, etc.)
   - Entering values
   - Adjusting the environment size slider
   - Verifying the calculation updates in real-time

### 4. Troubleshooting

If the site doesn't load:

1. **Check GitHub Pages Status**: Go to Settings > Pages and verify the deployment status
2. **Verify DNS Propagation**: DNS changes can take up to 48 hours to propagate globally
3. **Check CNAME File**: Ensure the `CNAME` file in the repository root contains only `license.splk.in`
4. **Review Workflow Logs**: Check the Actions tab for any deployment errors

## Architecture

- **Frontend**: Single-page HTML application with embedded CSS and JavaScript
- **Hosting**: GitHub Pages (static site hosting)
- **Deployment**: Automated via GitHub Actions on push to `main` branch
- **Domain**: Custom domain configured via CNAME file

## Files Involved

- `index.html` - The standalone calculator application
- `CNAME` - Custom domain configuration
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow

## Local Development

To test the site locally:

```bash
# Start a simple HTTP server
python3 -m http.server 8080

# Open in browser
open http://localhost:8080/index.html
```

## Maintenance

The site is completely static and requires no backend maintenance. Updates can be made by:

1. Modifying `index.html`
2. Committing changes to the `main` branch
3. GitHub Actions will automatically deploy the updates
