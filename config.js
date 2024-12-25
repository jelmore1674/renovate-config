module.exports = {
  endpoint: 'https://forgejo.justinelmore.dev/api/v1', // replace it with your actual endpoint
  gitAuthor: 'Renovate Bot <renovate-bot@forgejo.justinelmore.dev>',
  platform: 'gitea',
  onboardingConfigFileName: 'renovate.json',
  autodiscover: true,
  optimizeForDisabled: true,
  prHourlyLimit: 30,
  allowedPostUpgradeCommands: ['echo "security" >> test.txt'],
};
