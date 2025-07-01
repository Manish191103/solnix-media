# AWS Amplify Deployment Guide

## Prerequisites

- AWS Account
- Git repository (GitHub, GitLab, or AWS CodeCommit)
- Your project code pushed to the repository

## Deployment Steps

### Step 1: Prepare Your Repository

1. Ensure your code is pushed to a Git repository
2. The `amplify.yml` file is already configured for you

### Step 2: Deploy to AWS Amplify

1. **Go to AWS Amplify Console**
   - Visit: https://console.aws.amazon.com/amplify/
   - Click "New app" → "Host web app"

2. **Connect Your Repository**
   - Choose your Git provider (GitHub, GitLab, etc.)
   - Authorize AWS Amplify to access your repositories
   - Select your `solnix-media` repository
   - Choose the branch you want to deploy (usually `main` or `master`)

3. **Configure Build Settings**
   - AWS Amplify will auto-detect it's a Next.js app
   - The build settings will be automatically populated
   - The `amplify.yml` file will override these settings

4. **Environment Variables (if needed)**
   - If your app uses environment variables, add them in the Amplify console
   - Go to "Environment variables" in the left sidebar
   - Add any variables your app needs (e.g., API keys, database URLs)

5. **Review and Deploy**
   - Review all settings
   - Click "Save and deploy"

### Step 3: Monitor Deployment

- AWS Amplify will start building your app
- You can monitor the build process in real-time
- Build typically takes 2-5 minutes

### Step 4: Access Your Deployed App

- Once deployment is complete, you'll get a URL like: `https://branch-name.random-id.amplifyapp.com`
- You can also set up a custom domain in the Amplify console

## Configuration Details

### Current Setup (Server-Side Rendering)

Your app is configured to support:

- ✅ Server-side rendering
- ✅ API routes (like your contact form)
- ✅ Static assets optimization

### Alternative: Static Export

If you want a fully static site (no server-side functionality):

1. Replace `next.config.ts` content with `next.config.static.ts`
2. Replace `amplify.yml` content with `amplify.static.yml`
3. Remove or disable the `/api/contact` route

## Continuous Deployment

- AWS Amplify automatically deploys when you push to your connected branch
- You can configure branch-based deployments for different environments

## Custom Domain Setup

1. In Amplify console, go to "Domain management"
2. Click "Add domain"
3. Follow the DNS configuration steps

## Environment Variables

Add these in the Amplify console under "Environment variables":

```
# Example environment variables (add as needed)
NEXT_PUBLIC_SITE_URL=https://your-domain.com
# Add any other environment variables your app uses
```

## Troubleshooting

### Build Fails

- Check the build logs in the Amplify console
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### API Routes Not Working

- Ensure you're not using static export (`output: "export"`)
- Check that API routes are in the correct `/api/` directory structure

### Images Not Loading

- Images are configured with `unoptimized: true` for compatibility

## Monitoring and Analytics

- AWS Amplify provides built-in analytics
- You can monitor performance and usage in the console

## Support

- AWS Amplify Documentation: https://docs.amplify.aws/
- AWS Support for deployment issues
