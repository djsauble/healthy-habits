# Health Habits

Track your triggers, be mindful of how you respond, live with less stress.

## Setup

Create a new file named `src/config.json` and populate it with the following template:

```
window._config = {
  cognito: {
    userPoolId: '',
    userPoolClientId: '',
    region: ''
  },
  api: {
    invokeUrl: ''
  }
};
```

## Development

To build, run the following command:

```
npm run build
```

To build and sync content to S3, run the following command:

```
npm run deploy
```
