module.exports = {
  endpoint: 'https://forgejo.justinelmore.dev/api/v1', // replace it with your actual endpoint
  onboardingConfig: {
    $schema: 'https://docs.renovatebot.com/renovate-schema.json',
    extends: ['config:best-practices'],
  },
  platform: 'gitea',
  onboardingConfigFileName: 'renovate.json',
  autodiscover: true,
  optimizeForDisabled: true,
  prHourlyLimit: 30,
  allowedPostUpgradeCommands: ['.*'],
};
