module.exports = {
  //endpoint: 'https://gitea.justinelmore.dev/api/v1', // replace it with your actual endpoint
  onboardingConfig: {
    $schema: 'https://docs.renovatebot.com/renovate-schema.json',
    extends: ['local>renovate-bot/renovate-config'],
  },
  platform: 'gitea',
  onboardingConfigFileName: 'renovate.json',
  autodiscover: true,
  optimizeForDisabled: true,
  prHourlyLimit: 30,
  allowedPostUpgradeCommands: ['.*'],
  hostRules: [
    {
      matchHost: 'gitea.justinelmore.dev',
      username: process.env.ACTION_USER,
      password: process.env.RENOVATE_TOKEN,
    },
  ],
};
