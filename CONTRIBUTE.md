# Contributing to Solnix Media

Thank you for your interest in contributing to Solnix Media! We welcome contributions from the community and are pleased to have you join us.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Issues and Bug Reports](#issues-and-bug-reports)
- [Feature Requests](#feature-requests)
- [Community and Support](#community-and-support)

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please treat everyone with respect and create a welcoming environment for all contributors.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or higher)
- npm or yarn package manager
- Git

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/solnix-media.git
   cd solnix-media
   ```

3. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser** and navigate to `http://localhost:3000`

## How to Contribute

### Types of Contributions

We welcome various types of contributions:

- **Bug fixes** - Help us identify and fix issues
- **Feature development** - Add new functionality
- **Documentation** - Improve or add documentation
- **UI/UX improvements** - Enhance the user interface and experience
- **Performance optimizations** - Make the application faster and more efficient
- **Testing** - Add or improve test coverage

### Before You Start

1. **Check existing issues** to see if your idea is already being worked on
2. **Create an issue** to discuss major changes before implementing them
3. **Look for "good first issue"** labels if you're new to the project

## Pull Request Process

1. **Create a new branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes** following our coding standards

3. **Test your changes** thoroughly:
   ```bash
   npm run build
   npm run lint
   ```

4. **Commit your changes** using our commit message guidelines

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** on GitHub with:
   - Clear title and description
   - Reference to related issues
   - Screenshots (if applicable)
   - Test instructions

### Pull Request Guidelines

- Keep changes focused and atomic
- Include tests for new functionality
- Update documentation as needed
- Ensure all CI checks pass
- Be responsive to feedback and reviews

## Coding Standards

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Prefer functional components with hooks

### CSS/Styling

- Use Tailwind CSS for styling
- Follow mobile-first approach
- Maintain consistent spacing and typography
- Use CSS modules for component-specific styles

### File Organization

- Place components in appropriate directories
- Use barrel exports (`index.ts`) when beneficial
- Keep files focused and small
- Follow existing naming conventions

### Code Formatting

We use Prettier for code formatting. Run the following before committing:
```bash
npm run format
```

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

### Examples

```
feat(auth): add user authentication system
fix(ui): resolve mobile navigation menu issue
docs: update contributing guidelines
style: format code with prettier
```

## Issues and Bug Reports

When reporting bugs, please include:

1. **Clear title** and description
2. **Steps to reproduce** the issue
3. **Expected behavior** vs actual behavior
4. **Environment details** (OS, browser, Node.js version)
5. **Screenshots** or error messages (if applicable)
6. **Minimal reproduction** example if possible

Use our issue templates when available.

## Feature Requests

For feature requests, please:

1. **Search existing issues** to avoid duplicates
2. **Describe the problem** you're trying to solve
3. **Propose a solution** with implementation details
4. **Consider alternatives** and explain why your approach is preferred
5. **Provide mockups** or examples if applicable

## Testing

- Write unit tests for utility functions
- Add integration tests for complex features
- Test responsive design on multiple devices
- Verify accessibility standards compliance

Run tests with:
```bash
npm run test
```

## Documentation

- Update README.md for user-facing changes
- Add JSDoc comments for public APIs
- Update or create component documentation
- Include inline comments for complex logic

## Community and Support

- **GitHub Issues**: For bug reports and feature requests
- **GitHub Discussions**: For questions and general discussion
- **Pull Requests**: For code contributions

## Recognition

Contributors will be recognized in our README.md and release notes. We appreciate all forms of contribution, no matter how small!

## License

By contributing to Solnix Media, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to Solnix Media! 🎉 