# Health Habits

Track your triggers, be mindful of how you respond, live with less stress.

## Setup

Create a new file named `js/config.js` and populate it with the following template:

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

To build and sync content to S3, run the following commands:

```
npm run build
cd dist/
aws s3 sync . s3://healthy-habits-daniel-sauble/ --delete
```
