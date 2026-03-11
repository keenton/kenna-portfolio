export interface Section {
  type: "heading" | "paragraph" | "image" | "image-grid" | "video" | "list" | "labeled-list" | "callout";
  content?: string;
  items?: string[];
  src?: string;
  alt?: string;
  caption?: string;
  label?: string;
  labeledItems?: { label: string; content: string }[];
  columns?: number;
  images?: { src: string; alt?: string }[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  role?: string;
  platform?: string;
  focus?: string;
  heroImage: string;
  heroAlt?: string;
  tableOfContents?: string[];
  sections: Section[];
  nextProject?: { name: string; href: string; description?: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "tickets",
    title: "Designing Clarity in a Ticket Transfer Flow",
    subtitle: "Clarifying Transfer Experience",
    role: "UX / Interaction Designer (Contract)",
    platform: "Web-based subscription product",
    focus: "Ticket transfer & recipient experience",
    heroImage: "/uploads/2026/01/DoMoreCard.png",
    heroAlt: "DoMore ticket transfer case study",
    tableOfContents: ["Overview", "Current Experience", "Solution", "Results"],
    sections: [
      { type: "heading", content: "Overview" },
      {
        type: "paragraph",
        content:
          "This project focused on improving the ticket transfer experience for a subscription-based event platform. While the core functionality existed, users frequently misunderstood how transfers worked, leading to hesitation, confusion, and unnecessary support requests.",
      },
      {
        type: "paragraph",
        content:
          "I redesigned the transfer flow, clarifying expectations for both senders and recipients and improving the overall interaction without changing underlying business logic.",
      },
      { type: "heading", content: "The Problem" },
      {
        type: "paragraph",
        content:
          "Users attempting to transfer tickets and users accepting tickets were unclear about:",
      },
      {
        type: "list",
        items: [
          "Whether recipients needed to create an account",
          "What would happen after a transfer was initiated",
          "How recipients would access and use their tickets",
        ],
      },
      {
        type: "paragraph",
        content:
          "This lack of clarity caused users to second-guess the process, abandon transfers, or reach out for support, despite the flow being technically functional.",
      },
      { type: "heading", content: "Constraints" },
      {
        type: "list",
        items: [
          "Existing backend and transfer logic could not change",
          "Flow needed to work for both account holders and non-account holders",
          "Limited engineering bandwidth",
          "Utilize design system to seamlessly integrate with current experience",
        ],
      },
      { type: "heading", content: "Current Experience Breakdown" },
      { type: "heading", content: "First Scroll" },
      {
        type: "labeled-list",
        labeledItems: [
          { label: "Headline", content: "User learns they got tickets." },
          {
            label: "Paragraph",
            content:
              "User sees who the tickets are from, what they're for, and a note telling them to follow the steps below to redeem tickets.",
          },
          {
            label: "Concert tile",
            content:
              "User checks below the paragraph to find the steps, sees the concert tile, and taps it expecting it to show the details they need.",
          },
          {
            label: "Post-click",
            content:
              "Instead of ticket details, they hit the DoMORE sign-up screen and assume account creation is required to access the gifted tickets. They complete the entire sign-up flow, including payment, only to land somewhere that still doesn't show the ticket info they were looking for. This leaves them frustrated after entering personal and payment details with no payoff.",
          },
        ],
      },
      { type: "heading", content: "Second Scroll" },
      {
        type: "labeled-list",
        labeledItems: [
          {
            label: "Instructions",
            content:
              "If the user scrolls as intended, the instructions still feel vague. The box office concept isn't familiar to new DoMORE users, so they're left unsure and wondering if the offer is legit.",
          },
          {
            label: "Event Details",
            content:
              "Additional event details, linked to the DoStuff event listing, are hidden in a sentence below",
          },
          {
            label: "DoMORE Sign up",
            content:
              "The prompt to sign up for DoMORE is hidden below that, so even if the user wants to sign up based on the information in the first paragraph, they must scroll all the way to the bottom of the page to find out how.",
          },
        ],
      },
      {
        type: "image-grid",
        columns: 3,
        images: [
          { src: "/uploads/2026/01/Screenshot-2026-01-05-at-8.07.27-PM.png", alt: "Current experience screenshot" },
          { src: "/uploads/2026/01/IMG_4705-473x1024.png", alt: "Mobile screen 1" },
          { src: "/uploads/2026/01/IMG_4706-473x1024.png", alt: "Mobile screen 2" },
        ],
      },
      { type: "heading", content: "Design Solution" },
      { type: "heading", content: "1. Clarifying Intent with Immediate Context" },
      {
        type: "paragraph",
        content:
          "The original transfer experience did not clearly communicate that the ticket had been gifted, leading recipients to worry about payment or hidden requirements.",
      },
      {
        type: "paragraph",
        content:
          'Change: I updated the headline to "Gifted" to immediately signal that no purchase or payment was involved. I also shortened the introductory paragraph to surface critical information sooner, reducing the amount of reading required before understanding the context of the ticket.',
      },
      {
        type: "paragraph",
        content:
          "Impact: This set the correct mental model upfront and reduced anxiety before users engaged with the rest of the page.",
      },
      { type: "heading", content: "2. Answering the Primary Question As Quickly As Possible" },
      {
        type: "paragraph",
        content:
          "Recipients' first question was simple: How do I use these tickets? Previously, the answer was buried below secondary content.",
      },
      {
        type: "paragraph",
        content:
          "Change: I moved clear, step-by-step instructions into the first scroll, explicitly explaining:",
      },
      {
        type: "list",
        items: [
          "Tickets are picked up at the box office",
          "Only an ID and the emailed confirmation are required",
          "No payment is necessary",
        ],
      },
      {
        type: "paragraph",
        content:
          "I added a short reassurance reinforcing that the ticket was gifted, with a friendly nod to the person who sent it.",
      },
      {
        type: "paragraph",
        content:
          "Impact: Users could immediately understand what action to take, what to bring, and what to expect, without scrolling or guessing.",
      },
      { type: "heading", content: "3. Reducing Distraction by Reordering Content" },
      {
        type: "paragraph",
        content:
          "Event details were previously positioned in a way that distracted from the core task of understanding how to attend the event. In addition, the event details were linked to the sign up, causing further confusion.",
      },
      {
        type: "paragraph",
        content:
          "Change: I moved event details lower in the hierarchy and linked them to the main DoMORE event listing rather than the subscription sign-up flow.",
      },
      {
        type: "paragraph",
        content:
          "Impact: This preserved access to event information while keeping the primary focus on ticket usage, not conversion.",
      },
      { type: "heading", content: "4. Separating Use from Promotion" },
      {
        type: "paragraph",
        content:
          "The transfer experience mixed ticket usage instructions with product promotion, which created confusion and distrust.",
      },
      {
        type: "paragraph",
        content:
          "Change: I introduced a clearly separated content block dedicated to promoting DoMORE sign-ups, visually and structurally distinct from the ticket instructions.",
      },
      {
        type: "paragraph",
        content:
          "Impact: This allowed users to complete their primary task without friction while still giving the business a clean, appropriate opportunity to introduce the broader platform.",
      },
      {
        type: "image-grid",
        columns: 3,
        images: [
          { src: "/uploads/2026/01/Do312-Screen-249x1024.png", alt: "Redesigned screen" },
          { src: "/uploads/2023/11/Artboard-14_2@2x-1-1024x1024.png", alt: "Design solution" },
          { src: "/uploads/2023/11/Artboard-14@2x-1-1024x1024.png", alt: "Design solution 2" },
        ],
      },
      { type: "heading", content: "Result" },
      {
        type: "paragraph",
        content:
          "The redesigned transfer experience was approved and implemented. While quantitative metrics were not yet available at the time of this case study, the updated flow significantly improved clarity around ticket ownership, usage, and expectations.",
      },
      { type: "paragraph", content: "The experience now:" },
      {
        type: "list",
        items: [
          "Clearly communicates that tickets are gifted and require no payment",
          "Answers \"How do I use these tickets?\" within the first scroll",
          "Reduces confusion for non-account holders",
          "Separates core task completion from promotional messaging",
        ],
      },
      {
        type: "paragraph",
        content:
          "These changes aligned the experience with users' mental models and reduced friction at a high-trust moment in the journey.",
      },
    ],
  },
  {
    slug: "medi",
    title: "Medi Accessibility Audit",
    subtitle: "Accessibility audit of Medi Kitchen & Cocktails restaurant website.",
    heroImage: "/uploads/2023/11/Medi_Screens-1024x622.png",
    heroAlt: "MEDI Kitchen & Cocktails website screens",
    tableOfContents: ["Background", "Findings Summary", "Methods Used", "Key Findings", "What I Learned"],
    sections: [
      { type: "heading", content: "Background" },
      {
        type: "paragraph",
        content:
          "In the dynamic realm of digital design, prioritizing user experience goes hand-in-hand with ensuring inclusivity and accessibility for diverse audiences. In pursuit of this commitment, a thorough accessibility audit was recently conducted on the Medi Kitchen website, a Mediterranean restaurant located in Chicago.",
      },
      {
        type: "paragraph",
        content:
          "This audit, conducted in accordance with Web Content Accessibility Guidelines (WCAG) standards at levels A and AA, examined various aspects of the website's design, functionality, and content. By adhering to these established standards, the audit not only aims to evaluate the current accessibility status of the Medi Kitchen site but also offers realistic solutions to crafting digital experiences that are universally accessible and user-centric.",
      },
      { type: "heading", content: "Findings Summary" },
      {
        type: "paragraph",
        content:
          "This website has clear navigation and successful features, such as consistently underlined links and a primary \"Skip to Content\" bypass block that enhance accessibility. However, there are some elements that this website can modify further to improve accessibility.",
      },
      {
        type: "paragraph",
        content:
          "Primarily, creating clear, descriptive alternative text for meaningful photos will help users utilizing screen readers to understand the content. In addition, the menu page has images of text that are not read by screen readers and skipped entirely for keyboard users. This section requires an alternative form of accessing the menu information to be compliant. There are also programmatic errors, such as the email and phone links in the global footer being broken into separate hyperlinks and no H1 found on the homepage. Finally, there are some color combinations found in the global navigation, form fields, and menu images that do not meet the minimum color contrast requirements.",
      },
      { type: "heading", content: "Methods Used" },
      {
        type: "list",
        items: [
          "Test took place on the Chrome browser.",
          "VoiceOver and JAWS were used as screen reader.",
          "Color Contrast Analyzer was used to test color contrast.",
          "ANDI tool and Text Spacing Bookmarklet were also used for testing.",
        ],
      },
      { type: "heading", content: "Key Findings" },
      { type: "paragraph", content: "Below are some of the main issues found on the site and ways to fix them" },
      { type: "heading", content: "1.1.1 Non-text Content" },
      {
        type: "paragraph",
        content:
          "Problem: Site should have every element devoid of text that is presented to the user include a corresponding text alternative that serves an equivalent purpose.",
      },
      {
        type: "list",
        items: [
          "PDFs found on page, Menu, had alternative text assigned to null although they were images of text",
          "Photos on Private Events were text file names, for example G123.jpg",
          "Alternative text was not assigned for any of the photos found on page, Gallery",
        ],
      },
      { type: "paragraph", content: "Solution: Site should assign alternative text for every meaningful, non-text element and null alternative text for non-meaningful elements." },
      {
        type: "list",
        items: [
          "For Menu, assign alternative text to read menu content. Alternatively, developers could replace PDF content with HTML",
          "Each photo on Gallery and Private Events should be assigned descriptive alternative text",
        ],
      },
      { type: "heading", content: "1.3.1 Info and Relationships" },
      {
        type: "paragraph",
        content:
          "Problem: Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.",
      },
      {
        type: "list",
        items: [
          "Form on Private Events has every field read by screen reader twice",
          "In the global footer, links for phone number and email are incorrectly coded. The links are broken up, so they are read as 5 separate links instead of 2 (one for phone number, one for email)",
        ],
      },
      { type: "paragraph", content: "Solution: Site should ensure all text content is developed so users utilizing a screen reader can understand the content structure and relationships." },
      {
        type: "list",
        items: [
          "For Private Events, hidden code should be deleted",
          "In global footer, each link should be coded as one line, instead of broken in multiple sections",
        ],
      },
      { type: "heading", content: "2.4.5 Multiple Ways" },
      {
        type: "paragraph",
        content: "Problem: Multiple methods exist to find a web page within a set of web pages. The only way to access pages in website is through the main menu.",
      },
      { type: "paragraph", content: "Solution: Site should include a sitemap or search to allow users to access content in more than one way." },
      { type: "heading", content: "1.4.10 Reflow" },
      {
        type: "paragraph",
        content: "Problem: Site should be able to be resized at 400% without loss of functionality or the need to horizontally scroll.",
      },
      {
        type: "list",
        items: [
          "Globally, most images become blurry at 400%, especially on Menu page",
          "When site is resized, menu scroll area becomes very small, almost unusable (See video example below)",
        ],
      },
      { type: "paragraph", content: "Solution: Ensure site can be properly resized to 400%" },
      {
        type: "list",
        items: [
          "Globally, images should be increased in quality",
          "For menu, padding should be decreased to allow for resizing",
        ],
      },
      {
        type: "video",
        src: "/uploads/2023/11/Medi-Scroll-Example.mp4",
        caption: "Video: Menu scroll area at 400% zoom",
      },
      { type: "heading", content: "What I Learned" },
      {
        type: "paragraph",
        content:
          "Automatic audits can't catch everything: While automatic auditors such as WAVE or Axe Monitor can be helpful, they can't catch every fault of a website. For example, criteria such as 2.1.1 Keyboard cannot be accurately tested without a manual audit. Therefore, it is essential to perform manual audits to ensure all accessibility criteria are met.",
      },
      {
        type: "image-grid",
        columns: 4,
        images: [
          { src: "/uploads/2023/11/Artboard-14_1@2x-1-1024x1024.png", alt: "MEDI screen 1" },
          { src: "/uploads/2023/11/Artboard-14@2x-1-1024x1024.png", alt: "MEDI screen 2" },
          { src: "/uploads/2023/11/Artboard-14_4@2x-1-1024x1024.png", alt: "MEDI screen 3" },
          { src: "/uploads/2023/11/Artboard-14_2@2x-1-1024x1024.png", alt: "MEDI screen 4" },
        ],
      },
    ],
  },
  {
    slug: "posht",
    title: "Posht",
    subtitle: "Creation of a product to assist with poor posture.",
    heroImage: "/uploads/2024/01/Posht-Mockup@2x-1024x560.png",
    heroAlt: "Posht app mockup",
    tableOfContents: [
      "Background", "Agile Method", "Research", "Target Users & Stories",
      "Problem Statement", "Product Mapping", "Application Creation", "Solution", "Future Steps", "What I Learned"
    ],
    sections: [
      { type: "heading", content: "Background" },
      {
        type: "paragraph",
        content:
          "As our world becomes increasingly digitized, people are spending more time sitting in front of their computers. Even while upright, we are conditioned to spend time looking down at our mobile devices, causing neck pain, back pain, and overall poor posture.",
      },
      {
        type: "paragraph",
        content:
          "Our challenge was to create a product that would track and help safely correct our user's poor posture.",
      },
      {
        type: "paragraph",
        content:
          "The solution we created was Posht – a mobile application and wearable device that would take in data about the user's posture and produce timely advice to assist the user in correcting their posture. Posht securely allows users to be in charge of their standing and sitting habits to prevent or diminish their back pain.",
      },
      { type: "heading", content: "Use of Agile Method" },
      {
        type: "paragraph",
        content:
          "During this project, my team placed importance on using the agile method for development of our product. Through research, planning and analysis, and collaborative sprints, my team developed a cohesive and effective product.",
      },
      { type: "heading", content: "Research" },
      {
        type: "paragraph",
        content: "My team and I used surveys, secondary research, and user testing to pinpoint our cultural environment and user needs.",
      },
      { type: "heading", content: "Environmental Research" },
      {
        type: "list",
        items: [
          "The COVID-19 pandemic has caused more people to stay at home and indoors.",
          "Our increasingly digitized world has caused people to spend more time seated at computers.",
          "Increasing phone usage and technology has negatively impacted user posture.",
        ],
      },
      { type: "heading", content: "Survey Results" },
      {
        type: "paragraph",
        content:
          "We developed a short, but effective survey to address consumer concerns and needs. We captured the answers from 39 respondents. Some of the results from this survey are posted below:",
      },
      {
        type: "image-grid",
        columns: 2,
        images: [
          { src: "/uploads/2021/04/Screen-Shot-2021-04-21-at-4.24.23-PM.png", alt: "Survey result 1" },
          { src: "/uploads/2021/04/Screen-Shot-2021-04-21-at-4.27.52-PM.png", alt: "Survey result 2" },
        ],
      },
      { type: "heading", content: "User Research Key Insights" },
      {
        type: "labeled-list",
        labeledItems: [
          { label: "WANT TO IMPROVE POSTURE", content: "All of our users reported that they were interested in improving their posture. This presents as an excellent motivation for our product." },
          { label: "INCREASED TIME SEATED", content: "Users reported an average of 9.05 hours spent seated at a computer was 9.05 hours, nearly 40% of the day." },
          { label: "ADOPTION OF TECHNOLOGY", content: "Users reported they would be willing to utilize a device to improve their posture." },
        ],
      },
      { type: "heading", content: "Target Users & Stories" },
      { type: "paragraph", content: "Based on user research, we identified two user types to design our product around." },
      {
        type: "image-grid",
        columns: 2,
        images: [
          { src: "/uploads/2021/04/Screen-Shot-2021-04-21-at-4.24.43-PM.png", alt: "User types" },
          { src: "/uploads/2021/04/Screen-Shot-2021-04-21-at-4.24.33-PM.png", alt: "User stories" },
        ],
      },
      { type: "heading", content: "User Stories" },
      {
        type: "paragraph",
        content: "To communicate our design decisions, my team and I created user stories. These stories helped us articulate how each task would deliver value to our consumers.",
      },
      {
        type: "list",
        items: [
          "As a person with back pain, I want a product that gives me immediate feedback to correct my posture because I want to decrease my back pain.",
          "As a young person, I am looking for a product that will track my daily posture and tell me how to correct it because I want to avoid posture-related health conditions in my future.",
        ],
      },
      { type: "heading", content: "Problem Statement" },
      {
        type: "callout",
        content: "Users who are concerned about their posture need a device and application to easily track their posture and help them understand how to correct it.",
      },
      { type: "heading", content: "Product Mapping" },
      {
        type: "paragraph",
        content: "My team and I utilized the CREATE method to map how our users would interact with our product.",
      },
      {
        type: "labeled-list",
        labeledItems: [
          { label: "Cue", content: "The user receives a notification from their app suggesting that they use the product." },
          { label: "Reaction", content: "The user is reminded of their drive to improve their posture and begins to use the product." },
          { label: "Evaluate", content: "The user engages with the app and incorporates in feedback that the app gives them. The value that the user gains from opening the app and using the feedback is better sitting posture." },
          { label: "Ability", content: "The user has the ability to correct their posture using the feedback given by the app." },
          { label: "Time", content: "There might be circumstances where the user is unable to effectively correct their posture. Our product works best when the user is working out or when they are sitting down for long periods of time." },
          { label: "Experience", content: "The user correcting their posture might not be the most enjoyable experience, but the goal is to make it as pleasant as we can. Our team is going to do this by incorporating feedback and providing the user with a community to share their progress." },
        ],
      },
      { type: "heading", content: "Application Creation" },
      { type: "heading", content: "Initial Application Wireframes" },
      {
        type: "paragraph",
        content: "We created wireframes and performed usability testing to inform our final application designs.",
      },
      {
        type: "image-grid",
        columns: 3,
        images: [
          { src: "/uploads/2021/04/Screen-Shot-2021-04-22-at-12.38.39-AM.png", alt: "Wireframe 1" },
          { src: "/uploads/2021/04/Screen-Shot-2021-04-22-at-12.39.10-AM.png", alt: "Wireframe 2" },
          { src: "/uploads/2021/04/Screen-Shot-2021-04-22-at-12.39.01-AM.png", alt: "Wireframe 3" },
        ],
      },
      { type: "paragraph", content: "User Statistics page that will assist users in interpreting their posture over time." },
      { type: "paragraph", content: "Goals page will allow users to set their own goals and pace they want to improve their posture at." },
      { type: "paragraph", content: "Community feature that will allow users to connect over their goal accomplishments." },
      { type: "heading", content: "Usability Testing" },
      {
        type: "paragraph",
        content: "I performed usability interviews with the wireframes to catch pain points early in product development.",
      },
      {
        type: "labeled-list",
        labeledItems: [
          { label: "Pain Point", content: "Some users found difficulty interpreting the graphs." },
          { label: "Possible Solution", content: "Have options to display data in different methods." },
          { label: "Pain Point", content: "Goal setting was perceived as boring to some users." },
          { label: "Possible Solution", content: "Allow users earn \"badges\" for their posture accomplishments to increase motivation." },
        ],
      },
      { type: "heading", content: "Solution" },
      {
        type: "paragraph",
        content: "Based on our findings from research, we created concepts for a device and application that would assist users in fixing their posture.",
      },
      { type: "heading", content: "Posht Application" },
      {
        type: "paragraph",
        content: "I used our key insights from our usability testing to create a high fidelity prototype.",
      },
      {
        type: "list",
        items: [
          "A login screen was added to create a unique user profile and save user data.",
          "Informed by usability testing, users have the ability to view graphs as bar or line graphs.",
          "To increase user satisfaction, I gamified the goal-setting experience by allowing users to earn badges after achieving a goal.",
        ],
      },
      {
        type: "image-grid",
        columns: 4,
        images: [
          { src: "/uploads/2021/04/Screen-Shot-2021-04-22-at-12.54.32-AM.png", alt: "Posht app screen 1" },
          { src: "/uploads/2021/04/Screen-Shot-2021-04-22-at-12.54.42-AM.png", alt: "Posht app screen 2" },
          { src: "/uploads/2021/04/Screen-Shot-2021-04-22-at-12.55.10-AM.png", alt: "Posht app screen 3" },
          { src: "/uploads/2021/04/Screen-Shot-2021-04-22-at-1.04.24-AM.png", alt: "Posht app screen 4" },
        ],
      },
      { type: "heading", content: "Posht Device" },
      {
        type: "paragraph",
        content:
          "This device will be placed at the base of the neck of the user. It will come with replaceable adhesive and be worn inside or outside of clothing. The small light on the device will be a cue to the user to know if the device is placed incorrectly or needs to be charged.",
      },
      {
        type: "paragraph",
        content:
          "This device will use bluetooth to pair to the user's phone and send data to be processed by the Posht application.",
      },
      {
        type: "paragraph",
        content:
          "The application will use discrete notifications and custom vibration patterns through the user's phone to communicate immediate posture feedback to the user.",
      },
      { type: "heading", content: "Future Steps" },
      {
        type: "paragraph",
        content: "This was the first of our many sprints in this product design. Upon further development, we will accomplish the following.",
      },
      {
        type: "list",
        items: [
          "Perform user testing to understand which graphical models are easiest for users to understand.",
          "Flesh out application prototype",
          "Design community feature and user profiles",
        ],
      },
      { type: "heading", content: "What I Learned" },
      {
        type: "labeled-list",
        labeledItems: [
          {
            label: "Agile methodology is extremely effective in product design and development",
            content:
              "One of my favorite parts of this case study was working in an agile environment. Although it can never be performed completely perfect, this method was one of the best methods I have experienced to communicate design decisions and optimize product production. Moving forward, I will look to implement aspects of the agile method in my future development.",
          },
          {
            label: "Test early",
            content:
              "One of the most important parts of this method was testing and testing early. From our initial survey, we knew that there was a need for a posture product, however had I not tested our wireframes, we would have developed the app using incomprehensible graphical models. This would have rendered our product confusing and not user friendly.",
          },
        ],
      },
    ],
  },
  {
    slug: "cookbook",
    title: "MyCookbook",
    subtitle: "An app to help users create visual-based recipes.",
    heroImage: "/uploads/2024/03/Artboard-55.png",
    heroAlt: "MyCookbook app",
    tableOfContents: ["Background", "Research", "User Persona", "Problem Statement", "Ideation", "User Tasks", "Challenge", "Solution", "Testing", "What I Learned"],
    sections: [
      { type: "heading", content: "Background" },
      {
        type: "paragraph",
        content:
          "With the increasing trend in visually based learning experiences, our team set out to build a product that would assist users in creating their own visual learning experience using cooking.",
      },
      {
        type: "paragraph",
        content:
          "Our challenge was to create an environment where users could easily add visual content to previously handwritten recipes.",
      },
      {
        type: "paragraph",
        content:
          "The solution we created was MyCookbook, a mobile application that efficiently allows users to scan, input and add their own media to written recipes. MyCookbook gives users a platform to create a visual learning experience with their family recipes.",
      },
      { type: "heading", content: "Research" },
      {
        type: "paragraph",
        content:
          "Using primary and secondary research, our team sought to understand the landscape of the cooking industry. With surveys, observations, and interviews, my team and I discovered the following key insights about our environment, competition, and users.",
      },
      { type: "heading", content: "Secondary Research Key Findings" },
      {
        type: "list",
        items: [
          "Food is one of the most popular topics shared about on social media.",
          "Users enjoy personalized experiences, tailored to their specific interests.",
          "There is a rise in visual learning and media-centered experiences",
          "The COVID-19 pandemic has caused an upward trend in at-home cooking",
        ],
      },
      { type: "heading", content: "Competitive Analysis" },
      {
        type: "paragraph",
        content:
          "By analyzing our direct and indirect competitors, we found that there are no solutions that offer users an easy way to add media to each step of their recipe.",
      },
      {
        type: "image-grid",
        columns: 5,
        images: [
          { src: "/uploads/2021/03/yumlyapp.png", alt: "Yumly app" },
          { src: "/uploads/2021/03/bigovenapp.png", alt: "BigOven app" },
          { src: "/uploads/2021/03/cheftapapp.png", alt: "ChefTap app" },
          { src: "/uploads/2021/03/papapp.png", alt: "PAP app" },
          { src: "/uploads/2021/03/allrecipesapp.png", alt: "AllRecipes app" },
        ],
      },
      { type: "heading", content: "User Interviews Key Insights" },
      { type: "paragraph", content: "We conducted user interviews with 9 users and below are the findings." },
      {
        type: "image-grid",
        columns: 3,
        images: [
          { src: "/uploads/2021/04/Portfolio-Desire-to-Cook1.png", alt: "Desire to Cook insight" },
          { src: "/uploads/2021/04/Portfolio-Digitize-Recipes1.png", alt: "Wish to Digitize insight" },
          { src: "/uploads/2021/04/Portfolio-Difficulty-Learning1.png", alt: "Difficulty Learning insight" },
        ],
      },
      { type: "heading", content: "User Persona" },
      {
        type: "paragraph",
        content: "To gain a deeper insight into our user and their values, I developed a user persona to personalize our target audience.",
      },
      { type: "image", src: "/uploads/2021/04/Portfolio-User-Persona1-1024x576.png", alt: "User Persona" },
      { type: "heading", content: "Who are we designing for?" },
      {
        type: "list",
        items: [
          "Young adults ages 18 to 34",
          "Basic digital skills assumed",
          "Want to expand their skills in home cooking",
          "Tend to be visual learners",
        ],
      },
      { type: "heading", content: "Problem Statement" },
      {
        type: "callout",
        content: "Young adults need an intuitive product to help efficiently digitize and personalize recipes because they value visual-based learning experiences and want to easily share their cooking techniques.",
      },
      { type: "heading", content: "Rapid Ideation" },
      {
        type: "paragraph",
        content: "Through rapid ideation my team and I came up with several unique solutions.",
      },
      {
        type: "list",
        items: [
          "An app similar to Instagram, but just for food",
          "An app that tracks user's shopping habits and suggests recipes",
          "An app that helps users scan written recipes and add media to them",
        ],
      },
      { type: "heading", content: "User Tasks" },
      {
        type: "paragraph",
        content: "Given our short time frame for development, my team and I broke down the application into three user tasks.",
      },
      { type: "heading", content: "Task 1: Create a recipe from scratch" },
      { type: "paragraph", content: "The user can create their own recipe using the built-in template that would guide them each step along the way." },
      { type: "paragraph", content: "Key Features: Simple template that allows user to digitize original recipe" },
      {
        type: "image-grid",
        columns: 3,
        images: [
          { src: "/uploads/2021/04/Screen-Shot-2021-04-14-at-2.00.05-PM.png", alt: "Task 1 wireframe" },
          { src: "/uploads/2021/04/Screen-Shot-2021-04-14-at-2.00.41-PM.png", alt: "Task 2 wireframe" },
          { src: "/uploads/2021/04/Screen-Shot-2021-04-14-at-1.59.48-PM.png", alt: "Task 3 wireframe" },
        ],
      },
      { type: "heading", content: "Task 2: Personalize existing recipe" },
      { type: "paragraph", content: "The user can personalize existing text-only recipes chosen from our application's database on the \"Explore\" page." },
      {
        type: "list",
        items: [
          "Search by keyword, ingredient or cook time",
          "Easy customization of instructions and ingredients",
          "Ability to add media to each step of recipe",
        ],
      },
      { type: "heading", content: "Task 3: View your recipes" },
      { type: "paragraph", content: "The user can view a customized recipe in their digital cookbook, which would display the instructions along with photos or videos they inserted." },
      {
        type: "list",
        items: [
          "List view of customized recipe",
          "Easy-to-read individual recipe display",
        ],
      },
      { type: "heading", content: "Challenge" },
      {
        type: "paragraph",
        content: "The design team had difficulty developing the floating action button, so we developed alternative solution. We further researched these options by performing A/B testing and revealed most users preferred the Option B over Option A.",
      },
      {
        type: "image-grid",
        columns: 2,
        images: [
          { src: "/uploads/2024/01/Screenshot-2024-01-15-at-7.29.29-PM-471x1024.png", alt: "Option A: Floating Action Button" },
          { src: "/uploads/2024/01/Screenshot-2024-01-15-at-7.30.22-PM-474x1024.png", alt: "Option B: Bottom Button" },
        ],
      },
      { type: "heading", content: "Solution" },
      {
        type: "image-grid",
        columns: 5,
        images: [
          { src: "/uploads/2021/04/1.png", alt: "Screen 1" },
          { src: "/uploads/2021/04/2.png", alt: "Screen 2" },
          { src: "/uploads/2021/04/5.png", alt: "Screen 5" },
          { src: "/uploads/2021/04/4.png", alt: "Screen 4" },
          { src: "/uploads/2021/04/8.png", alt: "MyCookbook final" },
        ],
      },
      { type: "heading", content: "Usability Testing" },
      {
        type: "paragraph",
        content: "Over the course of our usability testing, my team and I found most users understood the organization and flow of the app. Although most users understood our application, we discovered a few pain points to consider in future development.",
      },
      {
        type: "labeled-list",
        labeledItems: [
          { label: "Pain Point", content: "Inputting individual recipes is time consuming for users." },
          { label: "Possible Solution", content: "Have popular ingredients and measurements auto-fill based on the user's recipe title." },
          { label: "Pain Point", content: "Users wanted to share their recipes, however our current solution did not support sharing." },
          { label: "Possible Solution", content: "Incorporate a social aspect or method for users to easily share their custom recipes." },
        ],
      },
      { type: "heading", content: "What I Learned" },
      {
        type: "labeled-list",
        labeledItems: [
          {
            label: "There is a delicate balance between design and development",
            content:
              "Having a background in computer science, I recognize that development can be tedious and time consuming. Understanding the development side helped me communicate to the design team the inevitable impossibilities of development given our short time frame. My combined experience in design and development allowed me to flourish as a team leader on this project.",
          },
          {
            label: "Usability testing is key",
            content:
              "Performing usability tests at each stage of development (low fidelity, high fidelity and prototype) saved my team time and allowed us to create an application that was fully user-centric. Although we had some issues with overall development, by the end of the case study we gained a deep understanding of our user and their needs.",
          },
        ],
      },
    ],
  },
  {
    slug: "packit",
    title: "PackIt",
    subtitle: "A mobile application to help users pack efficiently and stylishly.",
    heroImage: "/uploads/2024/07/PackIt.png",
    heroAlt: "PackIt app mockup",
    tableOfContents: ["Background", "Research", "User Persona", "Solution", "Future Plans"],
    sections: [
      { type: "heading", content: "Background" },
      {
        type: "paragraph",
        content:
          "Overpacking is a common frustration for travelers. As post-pandemic travel increases, people want to maintain their style without carrying excessive clothing. The capsule wardrobe concept is gaining popularity, but it can be challenging to implement while traveling.",
      },
      { type: "heading", content: "The Challenge" },
      {
        type: "labeled-list",
        labeledItems: [
          { label: "User Insight", content: "Travelers struggle with deciding how much to pack and ensuring they bring the right items." },
          { label: "UX Opportunity", content: "Create an app that simplifies packing while allowing users to maintain their style and stay organized." },
        ],
      },
      { type: "heading", content: "The Solution: PackIt" },
      {
        type: "list",
        items: [
          "Smart Packing Recommendations – Personalized outfit suggestions based on trip details.",
          "Event-Based Packing – Users tag outfits to specific events for better planning.",
          "Community Feature – Users share outfit ideas for inspiration.",
        ],
      },
      { type: "heading", content: "Research & Discovery" },
      { type: "heading", content: "User Interviews" },
      { type: "paragraph", content: "10 women (ages 20-30) interviewed to understand their packing habits and pain points." },
      { type: "image", src: "/uploads/2024/07/I-would-love-if-there-was-a-way-to-see-what-my-friends-or-other-people-were-wearing-to-the-concert-tonight-1024x768.png", alt: "User quote" },
      { type: "heading", content: "Key Insights" },
      {
        type: "list",
        items: [
          "Users need guidance on what to pack and how much.",
          "Users would like to share outfit ideas for events/trips.",
          "Terminology matters – \"Suitcase\" felt outdated; \"Bag\" or \"Luggage\" was preferred.",
        ],
      },
      { type: "heading", content: "Competitive Analysis" },
      {
        type: "paragraph",
        content: "Researched packing solutions via Reddit, TikTok, and competitor apps. Found no app that combines packing assistance with event tagging and outfit suggestions.",
      },
      { type: "image", src: "/uploads/2024/07/Untitled-design-2-e1720278874557-1024x899.png", alt: "Competitive analysis" },
      { type: "heading", content: "User Persona" },
      {
        type: "paragraph",
        content: "Using insights from interviews, I developed a persona to guide a user-centered solution:",
      },
      { type: "image", src: "/uploads/2024/07/PackIt-User-Persona.png", alt: "PackIt User Persona" },
      { type: "heading", content: "How might we help travelers pack efficiently while maintaining their personal style?" },
      {
        type: "list",
        items: [
          "Smart Packing Recommendations – AI-based outfit suggestions.",
          "Event-Based Packing – Users tag outfits to specific events.",
          "Community Feature – Users share outfit ideas for inspiration.",
        ],
      },
      { type: "heading", content: "User Tasks" },
      {
        type: "paragraph",
        content: "To create a Minimal Viable Product (MVP), I focused on three core tasks:",
      },
      {
        type: "list",
        items: [
          "User registers and completes onboarding.",
          "User adds an outfit to their bag.",
          "User receives outfit suggestions.",
        ],
      },
      { type: "heading", content: "Task 1: Onboarding & Registration" },
      {
        type: "list",
        items: [
          "Track trip destination.",
          "Select bag size.",
          "Complete registration.",
        ],
      },
      { type: "image", src: "/uploads/2024/07/User-Flow-1.png", alt: "Onboarding user flow" },
      {
        type: "labeled-list",
        labeledItems: [
          { label: "Step 1", content: "Track where user is traveling to create new trip." },
          { label: "Step 2", content: "Collect what bag user will pack in to understand amount of space user has." },
          { label: "Step 3", content: "Understand user's style so app can give users new outfit suggestions." },
          { label: "Step 4", content: "Promote collaborative trips and invite new members to app." },
          { label: "Step 5", content: "Collect name and email to create account with previous steps creating motivation for the user to sign up." },
        ],
      },
      {
        type: "labeled-list",
        labeledItems: [
          { label: "Feedback", content: "Users liked the simple onboarding but were confused about the difference between a \"personal item\" and a \"carry-on.\"" },
          { label: "Solution", content: "Added an info icon displaying average bag dimensions and how many days of clothing each size fits." },
        ],
      },
      { type: "heading", content: "Task 2: Adding Outfits to a Bag" },
      {
        type: "list",
        items: [
          "Select trip.",
          "View daily outfit breakdown.",
          "Add an outfit.",
        ],
      },
      { type: "image", src: "/uploads/2024/07/User-Flow-2-1.png", alt: "Adding outfits user flow" },
      {
        type: "list",
        items: [
          "User begins on Home screen and selects trip",
          "Trip screen displays how much of their bag is packed and breaks down the trip by each day, detailing how many outfits are needed",
          "In this case, another user has developed the itinerary and outfit needs of each day",
          "The user selects add an outfit and is met with the Create Outfit screen",
          "Here the user can upload new outfits from their closet",
          "Upload outfits from their camera roll",
          "Or get inspiration from the outfits others are planning to wear for that event",
          "When the user is finished, they can save their outfit to the event",
        ],
      },
      {
        type: "labeled-list",
        labeledItems: [
          { label: "Feedback", content: "Users liked the trip overview but found the term \"Suitcase\" outdated. Also, they didn't understand why \"Your Closet\" and \"Camera Roll\" were separate." },
          { label: "Solution", content: "Renamed \"Suitcase\" to \"Bags.\" Merged \"Camera Roll\" and \"Your Closet\" into one camera icon tab for adding outfits." },
        ],
      },
      { type: "heading", content: "Task 3: Receiving Outfit Suggestions" },
      {
        type: "list",
        items: [
          "Navigate to trip.",
          "Select a day.",
          "Select an event.",
          "View outfit suggestions.",
        ],
      },
      { type: "image", src: "/uploads/2024/07/User-Flow-3.png", alt: "Outfit suggestions user flow" },
      {
        type: "list",
        items: [
          "User starts on Home page and selects the trip with outfit suggestions notification",
          "User selects the day that the outfit suggestions are given for",
          "User selects the event that the outfit suggestions are given for",
          "The user is given a few outfit suggestions based on the outfits they already have packed",
          "User selects one to save to their bag",
        ],
      },
      {
        type: "labeled-list",
        labeledItems: [
          { label: "Feedback", content: "Users loved the feature but felt the flow took too many clicks." },
          { label: "Solution", content: "Added a notification shortcut that takes users directly to new suggestions." },
        ],
      },
      { type: "heading", content: "Final Outcome & Impact" },
      {
        type: "paragraph",
        content:
          "PackIt provides an intuitive, stylish, and stress-free packing solution. By combining user insights, testing, and iterative design, I created a tool that meets real traveler needs while maintaining a sleek, user-friendly experience.",
      },
      {
        type: "labeled-list",
        labeledItems: [
          { label: "Improved efficiency", content: "Streamlined packing experience, reducing decision fatigue." },
          { label: "More intuitive UI", content: "Simplified terminology and navigation." },
          { label: "Increased engagement", content: "Users excited about outfit suggestions as a core feature." },
        ],
      },
      { type: "heading", content: "Future Plans" },
      {
        type: "labeled-list",
        labeledItems: [
          { label: "Expand the \"Explore\" page", content: "Enable users to plan future trips." },
          { label: "Influencer Collaboration", content: "Allow influencers to share outfit ideas." },
          { label: "Revenue Model Exploration", content: "Partner with brands for outfit promotions." },
        ],
      },
      {
        type: "paragraph",
        content: "Continuing user testing and refinement will help bring PackIt to life as a fully developed app.",
      },
    ],
  },
  {
    slug: "confessions",
    title: "Confessions of a Buyer",
    subtitle: "Logo design, color scheme, and website for client.",
    heroImage: "/uploads/2020/04/COB-Logos-1.png",
    heroAlt: "Confessions of a Buyer logo options",
    tableOfContents: ["Background", "Logo Options", "Color Palette", "Finished Product", "What I Learned"],
    sections: [
      {
        type: "labeled-list",
        labeledItems: [
          { label: "CLIENT", content: "Confessions of a Buyer" },
          { label: "MY ROLE", content: "Art Direction, UX Design, UI Design" },
          { label: "PROBLEM", content: "Confessions of a Buyer needed a design that would look professional and be effective in recruiting new clients. Client also required a logo design and color scheme." },
          { label: "SUMMARY", content: "Designed logo, color scheme, and website for client." },
        ],
      },
      { type: "heading", content: "LOGO OPTIONS" },
      { type: "image", src: "/uploads/2020/04/COB-Logos-1.png", alt: "Logo options set 1" },
      { type: "image", src: "/uploads/2020/04/COB-Logos2.png", alt: "Logo options set 2" },
      { type: "heading", content: "COLOR PALLET" },
      { type: "image", src: "/uploads/2020/04/COB-Color-and-Font.png", alt: "Color palette and font" },
      { type: "heading", content: "APPROACH" },
      {
        type: "paragraph",
        content:
          "Client wanted main colors to be navy and yellow. I revised and presented a color pallet for approval. I created logo variations on Adobe Illustrator and had client choose favorite. Finally, I created the website around client's choices.",
      },
      { type: "heading", content: "WHAT I LEARNED" },
      {
        type: "paragraph",
        content:
          "This website was the start of my freelance company LiteDesigns. I learned how to balance professionalism and collaboration with the client. By listening to their wants and producing multiple options, I was able to efficiently and effectively create a successful product.",
      },
    ],
    nextProject: { name: "LifeQuotes.com", href: "#", description: "SEO Analysis, Website Design" },
  },
  {
    slug: "sunsetcoastlawns",
    title: "Sunset Coast Lawns",
    subtitle: "A website for a new lawn service company",
    heroImage: "/uploads/2024/03/Artboard-56@4x.png",
    heroAlt: "Sunset Coast Lawns website",
    tableOfContents: ["Background", "Competitive Audit", "UX Discovery", "Visual Approach", "Creative Concept", "User Testing", "Iterations", "Solution", "What I Learned"],
    sections: [
      { type: "heading", content: "Background" },
      {
        type: "paragraph",
        content:
          "Sunset Coast Lawns is a newly launched lawn service company that sought assistance in defining its brand identity and establishing an online presence to enhance business promotion strategies.",
      },
      { type: "heading", content: "Competitive Audit" },
      {
        type: "paragraph",
        content:
          "To help narrow down the clients wants and needs, I conducted a competitive audit to see what other competitors were doing in the space.",
      },
      {
        type: "list",
        items: [
          "While West Michigan Lawn Services had a lot of services to offer, their website is slightly overwhelming and contained unnecessary motion and graphics.",
          "KF Lawn Service contains many nice visual elements, but their lime green caused some accessibility issues.",
          "Westwood Lawn Services have a simplistic approach compared to other competitors I looked at. They also contain a clear map of the areas they cover which helps users understand if they can access service.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Findings: I found that most lawn companies in the area had a budget-centric, bold approach. To differentiate from other competitors, we decided to go with a modern and upscale feel.",
      },
      { type: "heading", content: "UX Discovery" },
      {
        type: "paragraph",
        content:
          "In order to gain an initial understanding of the website's structure and promptly ascertain its information architecture, I developed a sitemap. To maintain site efficiency, I implemented a structure comprising eight pages, ensuring a relatively shallow site hierarchy.",
      },
      { type: "heading", content: "Visual Approach" },
      {
        type: "paragraph",
        content:
          "Following the presentation of the sitemap to the client, it became apparent that the client required further visual aids to comprehend the site structure. Consequently, I developed additional wireframes for the client's feedback and reaction. This process was instrumental in initiating the definition of site structure and hierarchy, as well as laying the groundwork for creating a development template.",
      },
      {
        type: "image-grid",
        columns: 2,
        images: [
          { src: "/uploads/2024/03/Screenshot-2024-03-20-at-3.47.04-PM-e1710967680297-1024x653.png", alt: "Home wireframe" },
          { src: "/uploads/2024/03/Screenshot-2024-03-20-at-1.52.14-PM-1024x479.png", alt: "Services wireframe" },
        ],
      },
      { type: "heading", content: "Creative Concepting" },
      {
        type: "paragraph",
        content:
          "Following several iterations of wireframes, I obtained approval from the client regarding the site structure and template. Then, I commenced the development of their brand's color palette, typography, and overall style.",
      },
      { type: "heading", content: "User Testing" },
      {
        type: "paragraph",
        content:
          "I developed a high-fidelity prototype of the proposed website and conducted user testing with a sample of 10 individuals. During these sessions, I posed a series of questions aimed at eliciting their impressions and expectations regarding the site's functionality and design.",
      },
      { type: "heading", content: "Findings" },
      {
        type: "list",
        items: [
          "Most users reported that the most important thing when it came to lawn maintenance for them was affordability and reliability.",
          "Some users had difficulty finding the estimate form.",
          "Users were most interested in services.",
        ],
      },
      { type: "heading", content: "Iterations" },
      {
        type: "paragraph",
        content:
          "In response to the client's request to emphasize estimates and users' challenges in locating the estimate form, I strategically placed the form directly on the homepage to ensure it was the first element users encountered. Furthermore, I identified opportunities to incorporate additional estimate call-to-action (CTA) buttons throughout the site.",
      },
      { type: "image", src: "/uploads/2024/03/Frame-3.png", alt: "Site iterations" },
      { type: "heading", content: "Solution" },
      {
        type: "paragraph",
        content:
          "Following extensive research, meticulous design, and thorough development efforts, I successfully delivered a website that not only delighted the client but also resonated positively with users. As a result, our company has garnered more than 30 new clients, showcasing the efficacy of the design.",
      },
      { type: "image", src: "/uploads/2024/03/Artboard-56@4x.png", alt: "Final website solution" },
      { type: "heading", content: "What I Learned" },
      {
        type: "paragraph",
        content:
          "It is crucial for designers to cultivate versatility in communication methods with stakeholders. Recognizing that others may vary in their preferences, with some leaning towards technological and logical discussions while others are more inclined towards visual presentations, it is imperative to offer multiple communication approaches. This ensures effective collaboration even when our communication style may differ from that of our stakeholders.",
      },
    ],
  },
  {
    slug: "disease-education",
    title: "Redesigning Disease Education Site for Accessibility & Usability",
    subtitle: "Healthcare accessibility redesign project.",
    heroImage: "/uploads/2024/07/Frame-94.png",
    heroAlt: "Disease education site redesign",
    tableOfContents: ["Overview"],
    sections: [
      {
        type: "paragraph",
        content: "This case study details the accessibility and usability redesign of a disease education website.",
      },
      { type: "image", src: "/uploads/2024/07/Frame-94.png", alt: "Disease education site redesign" },
    ],
  },
  {
    slug: "facebook",
    title: "Facebook Redesign",
    subtitle: "UI redesign concept for Facebook.",
    heroImage: "/uploads/2023/11/Artboard-8_2@2x-1.png",
    heroAlt: "Facebook redesign",
    tableOfContents: ["Overview"],
    sections: [
      {
        type: "paragraph",
        content: "A UI redesign concept exploring improved usability and visual design for the Facebook platform.",
      },
      { type: "image", src: "/uploads/2023/11/Artboard-8_2@2x-1.png", alt: "Facebook redesign concept" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}
