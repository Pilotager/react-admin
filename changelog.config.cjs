module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: [],
  types: {
    chore: {
      description: '更改构建过程或辅助工具和库，例如文档生成',
      emoji: '🤖',
      value: 'chore',
    },
    ci: {
      description: '对CI配置文件和脚本的更改',
      emoji: '🎡',
      value: 'ci',
    },
    docs: {
      description: '仅文档更改',
      emoji: '✏️',
      value: 'docs',
    },
    feat: {
      description: '一项新功能',
      emoji: '🎸',
      value: 'feat',
    },
    fix: {
      description: '一个错误修复',
      emoji: '🐛',
      value: 'fix',
    },
    perf: {
      description: '改进性能的代码更改',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description: '既不修正错误也不增加功能的代码更改（重构）',
      emoji: '💡',
      value: 'refactor',
    },
    release: {
      description: '创建发布提交',
      emoji: '🏹',
      value: 'release',
    },
    style: {
      description: '不影响代码含义的更改（空白，格式，缺少分号等）',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: '添加缺失或更正现有测试',
      emoji: '💍',
      value: 'test',
    },
    messages: {
      type: "Select the type of change that you're committing:",
      customScope: 'Select the scope this component affects:',
      subject: 'Write a short, imperative mood description of the change:\n',
      body: 'Provide a longer description of the change:\n ',
      breaking: 'List any breaking changes:\n',
      footer: 'Issues this commit closes, e.g #123:',
      confirmCommit: 'The packages that this commit has affected\n',
    },
  },
};
