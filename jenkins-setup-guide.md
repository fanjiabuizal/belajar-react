# Multi-Environment Jenkins Setup

## Environment Strategy

### Development Environment
- **Source**: Local files
- **Purpose**: Quick testing, development
- **URL**: http://localhost:3001
- **Auto Deploy**: Yes
- **Pipeline**: Jenkinsfile.dev

### Production Environment  
- **Source**: Git repository (recommended) or local
- **Purpose**: Live application
- **URL**: http://localhost:3000
- **Auto Deploy**: Manual approval required
- **Pipeline**: Jenkinsfile.prod

## Jenkins Jobs Setup

### 1. Create Development Job
```
Job Name: belajar-react-dev
Type: Pipeline
Pipeline Script: Copy content from Jenkinsfile.dev
Trigger: Manual or webhook
```

### 2. Create Production Job
```
Job Name: belajar-react-prod  
Type: Pipeline
Pipeline Script: Copy content from Jenkinsfile.prod
Trigger: Manual only
Parameters: DEPLOY_APPROVAL (choice)
```

## Folder Structure After Deploy

```
C:\
├── dev-deploy\          ← Development build
│   ├── static\
│   └── index.html
├── prod-deploy\         ← Production build  
│   ├── static\
│   └── index.html
└── prod-backup\         ← Production backup
    ├── static\
    └── index.html
```

## Workflow

### Development Workflow:
1. Make code changes locally
2. Run "belajar-react-dev" job
3. Test at http://localhost:3001
4. Repeat until satisfied

### Production Workflow:
1. Code ready for production
2. Run "belajar-react-prod" job
3. Choose "YES" for DEPLOY_APPROVAL
4. Manual approval step
5. Deploy to http://localhost:3000
6. Automatic backup & rollback on failure

## Advanced Setup (Future)

### With Git Integration:
```
Development: feature/dev branch → Auto deploy
Staging: develop branch → Auto deploy  
Production: main branch → Manual approval
```

### With Real Servers:
```
Development: Local server
Staging: Test server (e.g., staging.yoursite.com)
Production: Live server (e.g., yoursite.com)
```

## Commands to Create Folders

```cmd
mkdir C:\dev-deploy
mkdir C:\prod-deploy  
mkdir C:\prod-backup
```

## Benefits of This Setup

✅ **Separation of Concerns**: Dev vs Prod environments
✅ **Safety**: Manual approval for production
✅ **Rollback**: Automatic backup and restore
✅ **Scalable**: Easy to add staging environment
✅ **Flexible**: Can integrate with Git later
✅ **Testing**: Different ports for parallel testing