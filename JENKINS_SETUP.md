# Jenkins Setup for Windows

## Installation Steps

1. **Download Jenkins**
   - Go to https://www.jenkins.io/download/
   - Download Jenkins for Windows (.msi installer)

2. **Install Jenkins**
   - Run the installer
   - During installation, set port to **8085**
   - Complete the setup wizard

3. **Access Jenkins**
   - Open browser: http://localhost:8085/
   - Follow initial setup wizard
   - Install suggested plugins

4. **Configure Node.js**
   - Go to Manage Jenkins → Global Tool Configuration
   - Add Node.js installation
   - Name: "Node 18"
   - Install automatically: Check
   - Version: NodeJS 18.x

## Project Setup

1. **Create New Job**
   - New Item → Pipeline
   - Name: "belajar-react"

2. **Configure Pipeline**
   - Pipeline → Definition: Pipeline script from SCM
   - SCM: Git
   - Repository URL: [your-repo-url]
   - Script Path: Jenkinsfile

3. **Build Project**
   - Click "Build Now"
   - Check Console Output for results

## Manual Commands (Alternative)

```cmd
# Install dependencies
npm ci

# Run tests
npm test -- --coverage --watchAll=false

# Build project
npm run build

# Serve build (optional)
npx serve -s build -l 3000
```

## Notes
- Jenkins runs on port 8085
- Build artifacts saved in `build/` folder
- No Docker required
- All commands use Windows batch (`bat`) instead of shell (`sh`)