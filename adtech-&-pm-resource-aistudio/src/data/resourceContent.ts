export const RESOURCE_CONTENT: Record<string, string> = {
  "AI-First Product Management": `
# AI-First Product Management: Building with GenAI & LLMs

AI is no longer just a feature; it's the core of modern product strategy. AI-First PMing requires a shift from deterministic logic to probabilistic outcomes.

## Key Concepts
- **LLMs & GenAI**: Understanding the capabilities and limitations of Large Language Models.
- **Prompt Engineering**: Designing effective inputs to get desired outputs from AI models.
- **RLHF**: Reinforcement Learning from Human Feedback and its role in model tuning.
- **Inference vs. Training**: Knowing when to use pre-trained models versus fine-tuning.

## Best Practices
- **Start with the User Problem**: Don't build AI for the sake of AI. Identify where AI can uniquely solve a pain point.
- **Design for Failure**: AI is probabilistic. Always have a fallback or a way for users to provide feedback when the AI is wrong.
- **Data Flywheels**: Build systems where user interactions improve the model over time.

## Pro-tip
Focus on "AI-UX". The biggest challenge in AI products isn't the model—it's how the user interacts with an unpredictable output.
  `,
  "AdTech & Monetization": `
# AdTech & Monetization: From Sponsored Ads to Programmatic

AdTech is the backbone of the free internet. Understanding the ecosystem from DSPs to SSPs is crucial for any monetization PM.

## Key Concepts
- **DSP (Demand-Side Platform)**: Where advertisers buy ad space.
- **SSP (Supply-Side Platform)**: Where publishers sell their inventory.
- **RTB (Real-Time Bidding)**: The auction process that happens in milliseconds.
- **eCPM & Fill Rate**: Key metrics for measuring monetization success.

## Best Practices
- **Balance UX and Revenue**: Over-monetization leads to user churn. Find the "sweet spot."
- **Transparency**: Ensure advertisers know what they are buying and users know why they see an ad.
- **Fraud Prevention**: Stay ahead of ad fraud to maintain trust in your ecosystem.

## Pro-tip
The future of AdTech is privacy-first. Master concepts like "Privacy Sandbox" and "Contextual Targeting" as third-party cookies disappear.
  `,
  "Search & Discovery Mastery": `
# Search & Discovery Mastery: Building Recommendation Systems

Search is about intent; Discovery is about inspiration. Both are powered by complex ranking and retrieval systems.

## Key Concepts
- **Retrieval vs. Ranking**: Finding the candidate set vs. ordering them for the user.
- **LTR (Learning to Rank)**: Using ML to optimize the order of results. Instead of static rules (like "sort by price"), LTR learns from clicks, add-to-carts, and purchases.
- **Collaborative Filtering**: "Users who liked this also liked..."
- **Precision & Recall**: Measuring the accuracy and completeness of search results.

## Why LTR is Critical for Retailers
- **Improves Conversion Rates**: Relevant products first lead to more clicks and buys.
- **Increases AOV**: Strategically ranking higher-margin products.
- **Personalization**: Incorporating history, location, and device type.

## Best Practices
- **Optimize for Long-term Value**: Don't just optimize for clicks; optimize for conversion or retention.
- **Personalization**: Use user history to tailor results without creating a "filter bubble."
- **Speed Matters**: Every millisecond of latency in search directly impacts conversion.

## Pro-tip
Always include "Exploration" in your algorithms. If you only show what users already like, you'll never discover new interests.
  `,
  "Data-Driven PM": `
# Data-Driven Product Management: Analytics & Metrics

Data-driven PMs don't just look at dashboards; they ask the right questions and find the stories within the numbers.

## Key Concepts
- **North Star Metric**: The single most important metric that reflects the core value of your product.
- **A/B Testing**: The gold standard for validating hypotheses.
- **Cohort Analysis**: Tracking how different groups of users behave over time.
- **Funnel Optimization**: Identifying where users drop off in a process.

## Best Practices
- **Define Success Before You Build**: Know exactly which metric you expect to move.
- **Beware of Vanity Metrics**: High page views don't matter if nobody is converting.
- **Qualitative + Quantitative**: Data tells you *what* is happening; user interviews tell you *why*.

## Pro-tip
Learn basic SQL. Being able to pull your own data makes you 10x faster and more independent as a PM.
  `,
  "Building 0-to-1 Products": `
# Building 0-to-1 Products: From Idea to Product-Market Fit

Building something from nothing is the hardest and most rewarding part of product management.

## Key Concepts
- **MVP (Minimum Viable Product)**: The simplest version of your product that solves the core problem.
- **Product-Market Fit (PMF)**: When you have a product that people actually want and are willing to pay for.
- **Pivot**: Changing direction based on market feedback.
- **Customer Discovery**: The process of validating your assumptions with real users.

## Best Practices
- **Fall in Love with the Problem, Not the Solution**: Be flexible on how you solve it.
- **Speed is a Feature**: In the 0-to-1 stage, learning fast is more important than building perfectly.
- **Stay Lean**: Don't over-hire or over-build until you have clear signals of PMF.

## Pro-tip
Your first 10 users are your most important. Talk to them every single day.
  `,
  "Enterprise B2B PM": `
# Enterprise B2B Product Management: Complex Sales & Stakeholders

B2B PMing is about solving business problems, managing long sales cycles, and balancing the needs of buyers vs. users.

## Key Concepts
- **Buyer vs. User**: The person who pays for the software is often not the one using it.
- **SLA (Service Level Agreement)**: Contractual obligations for uptime and support.
- **Roadmap Commitments**: Managing the pressure to build custom features for big clients.
- **Churn & Retention**: The lifeblood of SaaS businesses.

## Best Practices
- **Build for Scalability**: Enterprise clients need robust permissions, security, and integrations.
- **Partner with Sales**: Understand the "why" behind lost deals to inform your roadmap.
- **Focus on ROI**: B2B products must either save money or make money for the client.

## Pro-tip
Don't become a "Feature Factory" for one big client. Always ask: "Will this benefit our other 100 clients too?"
  `,
  "Strategic Prioritization": `
# Strategic Prioritization: Roadmapping & Frameworks

Prioritization is the art of saying "no" to good ideas so you can say "yes" to great ones.

## Key Concepts
- **RICE Framework**: Reach, Impact, Confidence, and Effort.
- **Kano Model**: Categorizing features into Basic, Performance, and Delighters.
- **Opportunity Solution Tree**: Mapping outcomes to potential solutions.
- **MoSCoW**: Must have, Should have, Could have, Won't have.

## Best Practices
- **Align with Business Goals**: Every feature should move you closer to your strategic objectives.
- **Be Transparent**: Share your prioritization logic with stakeholders to build trust.
- **Re-evaluate Regularly**: Markets change. Your priorities should be firm but not fixed.

## Pro-tip
The best roadmap is a list of *problems to solve*, not a list of *features to build*.
  `,
  "Technical Depth for PMs": `
# Technical Depth for Product Managers: APIs & Architecture

You don't need to code, but you do need to understand how the "engine" works to be an effective partner to engineering.

## Key Concepts
- **APIs (Application Programming Interfaces)**: How different systems talk to each other.
- **Microservices vs. Monolith**: Understanding modern software architecture.
- **Tech Debt**: The cost of taking shortcuts today that must be paid back later.
- **Scalability & Latency**: Why some features take longer to build than others.

## Best Practices
- **Ask "How" and "Why"**: Don't just accept a "it's not possible." Understand the technical constraints.
- **Write Clear Technical Requirements**: Help engineers understand the "what" so they can design the "how."
- **Respect the Craft**: Understand the effort required for testing, security, and maintenance.

## Pro-tip
Draw a system diagram. If you can't map out how data flows through your product, you don't understand it well enough.
  `,
  "Product Design & UX": `
# Product Design & User Experience: From Wireframes to Prototypes

Design is not just how it looks; it's how it works. PMs must be champions for the user experience.

## Key Concepts
- **User Personas**: Detailed profiles of your target users.
- **User Journeys**: Mapping the steps a user takes to achieve a goal.
- **Wireframes vs. High-Fidelity**: Low-detail layout vs. pixel-perfect design.
- **Usability Testing**: Watching real users try to use your product.

## Best Practices
- **Consistency is Key**: Use design systems to maintain a cohesive look and feel.
- **Reduce Cognitive Load**: Make the "happy path" as obvious and simple as possible.
- **Accessibility**: Design for everyone, including those with disabilities.

## Pro-tip
"Don't make me think." If a user has to read a manual to use your feature, the design has failed.
  `,
  "Career & Interview Prep": `
# Breaking into PM: Career Guide & Interview Prep

PM interviews are a unique beast. Mastering them requires a mix of product sense, analytical thinking, and storytelling.

## Key Concepts
- **Product Sense**: The ability to design a product for a specific user and goal.
- **Execution Questions**: How you handle trade-offs, metrics, and bugs.
- **Behavioral Questions**: "Tell me about a time you failed..."
- **Case Studies**: Solving a real-world business problem on the fly.

## Best Practices
- **Use Frameworks (Sparingly)**: Frameworks like CIRCLES are helpful, but don't let them make you sound like a robot.
- **Practice Out Loud**: Thinking it is different from saying it. Find a mock interview partner.
- **Research the Company**: Know their products, their competitors, and their challenges.

## Pro-tip
In interviews, the *process* is more important than the *answer*. Show your work and explain your trade-offs.
  `,
  "Agile Development": `
# Agile Product Development: Scrum, Kanban & Sprints

Agile is about iterative development, constant feedback, and being able to respond to change.

## Key Concepts
- **Scrum**: A framework with fixed-length iterations (sprints).
- **Kanban**: A visual system for managing work as it moves through a process.
- **Backlog Grooming**: Keeping the list of tasks clean and prioritized.
- **Retrospectives**: Looking back at what went well and what didn't.

## Best Practices
- **Empower the Team**: PMs define the "what"; the team defines the "how."
- **Avoid Scope Creep**: Keep sprints focused on the agreed-upon goals.
- **Focus on Velocity and Quality**: Don't sacrifice one for the other.

## Pro-tip
Agile is a mindset, not just a set of meetings. The goal is to deliver value to users faster, not to follow a process.
  `,
  "Product-Led Growth": `
# Product-Led Growth: Acquisition, Retention & Revenue

PLG is a strategy where the product itself is the primary driver of customer acquisition, expansion, and retention.

## Key Concepts
- **Freemium vs. Free Trial**: Different ways to let users experience value before paying.
- **Aha! Moment**: The point where a user first realizes the value of your product.
- **Viral Loops**: When users bring in more users as part of using the product.
- **Self-Serve Onboarding**: Letting users get started without talking to a salesperson.

## Best Practices
- **Reduce Friction**: Make it as easy as possible for users to sign up and start seeing value.
- **Focus on Retention**: Acquisition is expensive; retention is where the profit is.
- **Data-Driven Onboarding**: Use data to guide users to their "Aha! Moment."

## Pro-tip
In PLG, your product *is* your marketing. If the product doesn't sell itself, you're not doing PLG.
  `
};
