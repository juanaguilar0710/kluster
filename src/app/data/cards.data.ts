import { Basecard } from "src/services/interface/basecard";

export const CardsData: Basecard[] = [
  {
    title: 'Instagram',
    features: [
      { name: 'Upload images', cost: 2500, duration: 7, category: 'Photos & Videos', id: 1, img: 'path/to/img1', description: 'Upload and share images with followers.' },
      { name: 'Send messages', cost: 2500, duration: 5, category: 'Communication', id: 2, img: 'path/to/img2', description: 'Send direct messages to other users.' },
      { name: 'Login and signup', cost: 2500, duration: 3, category: 'Essentials', id: 3, img: 'path/to/img3', description: 'User authentication for login and signup.' },
      { name: 'Like and share', cost: 2500, duration: 4, category: 'Social', id: 4, img: 'path/to/img4', description: 'Like and share posts from other users.' }
    ],
    numberFeatures: 60,
    cost: 10000,
    id: 1,
    category: 'Social Media',
    img: '',
    developmentDuration: 30,
    description: 'A popular social media platform for sharing photos and videos.'
  },
  {
    title: 'Uber',
    features: [
      { name: 'Login / signup', cost: 17500, duration: 3, category: 'Essentials', id: 5, img: 'path/to/img5', description: 'User authentication for login and signup.' },
      { name: 'Track driver', cost: 17500, duration: 7, category: 'Smart Features', id: 6, img: 'path/to/img6', description: 'Real-time tracking of driver location.' },
      { name: 'Book ride', cost: 17500, duration: 5, category: 'Order Management', id: 7, img: 'path/to/img7', description: 'Book a ride quickly and easily.' },
      { name: 'Share location', cost: 17500, duration: 6, category: 'Smart Features', id: 8, img: 'path/to/img8', description: 'Share your location with friends or family.' }
    ],
    numberFeatures: 35,
    cost: 70000,
    id: 2,
    category: 'Transport',
    img: '',
    developmentDuration: 45,
    description: 'A ride-hailing app to book rides and track drivers in real-time.'
  },
  {
    title: 'WhatsApp',
    features: [
      { name: 'Send messages', cost: 10000, duration: 5, category: 'Communication', id: 9, img: 'path/to/img9', description: 'Send text messages to contacts.' },
      { name: 'Voice calls', cost: 10000, duration: 6, category: 'Communication', id: 10, img: 'path/to/img10', description: 'Make voice calls to contacts.' },
      { name: 'Video calls', cost: 10000, duration: 7, category: 'Communication', id: 11, img: 'path/to/img11', description: 'Make video calls to contacts.' },
      { name: 'Group chats', cost: 10000, duration: 4, category: 'Communication', id: 12, img: 'path/to/img12', description: 'Create and participate in group chats.' }
    ],
    numberFeatures: 40,
    cost: 0,
    id: 3,
    category: 'Communication',
    img: '',
    developmentDuration: 25,
    description: 'A messaging app that offers text, voice, and video communication.'
  },
  {
    title: 'Spotify',
    features: [
      { name: 'Listen to music', cost: 12500, duration: 8, category: 'Audio & Music', id: 13, img: 'path/to/img13', description: 'Stream a wide variety of music.' },
      { name: 'Create playlists', cost: 12500, duration: 6, category: 'Audio & Music', id: 14, img: 'path/to/img14', description: 'Create and manage your own playlists.' },
      { name: 'Discover new songs', cost: 12500, duration: 7, category: 'Audio & Music', id: 15, img: 'path/to/img15', description: 'Discover new music based on your tastes.' },
      { name: 'Offline mode', cost: 12500, duration: 5, category: 'Audio & Music', id: 16, img: 'path/to/img16', description: 'Download music to listen offline.' }
    ],
    numberFeatures: 30,
    cost: 50000,
    id: 4,
    category: 'Entertainment',
    img: '',
    developmentDuration: 35,
    description: 'A music streaming service with millions of tracks and offline listening.'
  },
  {
    title: 'Google Maps',
    features: [
      { name: 'Navigation', cost: 0, duration: 9, category: 'Utilities', id: 17, img: 'path/to/img17', description: 'Turn-by-turn navigation for driving, walking, or biking.' },
      { name: 'Search places', cost: 0, duration: 8, category: 'Utilities', id: 18, img: 'path/to/img18', description: 'Search for places and businesses nearby.' },
      { name: 'Traffic updates', cost: 0, duration: 7, category: 'Utilities', id: 19, img: 'path/to/img19', description: 'Get real-time traffic updates and conditions.' },
      { name: 'Offline maps', cost: 0, duration: 6, category: 'Utilities', id: 20, img: 'path/to/img20', description: 'Download maps for offline use.' }
    ],
    numberFeatures: 25,
    cost: 0,
    id: 5,
    category: 'Utilities',
    img: '',
    developmentDuration: 20,
    description: 'A comprehensive mapping service with navigation and offline maps.'
  },
  {
    title: 'Facebook',
    features: [
      { name: 'Post updates', cost: 0, duration: 4, category: 'Social', id: 21, img: 'path/to/img21', description: 'Share updates with friends and followers.' },
      { name: 'Chat with friends', cost: 0, duration: 5, category: 'Communication', id: 22, img: 'path/to/img22', description: 'Instant messaging with friends.' },
      { name: 'Share photos', cost: 0, duration: 6, category: 'Photos & Videos', id: 23, img: 'path/to/img23', description: 'Upload and share photos with your network.' },
      { name: 'Join groups', cost: 0, duration: 7, category: 'Social', id: 24, img: 'path/to/img24', description: 'Join and participate in groups of interest.' }
    ],
    numberFeatures: 50,
    cost: 0,
    id: 6,
    category: 'Social Media',
    img: '',
    developmentDuration: 40,
    description: 'A social networking platform to connect with friends and share content.'
  },
  {
    title: 'Twitter',
    features: [
      { name: 'Tweet', cost: 0, duration: 3, category: 'Social', id: 25, img: 'path/to/img25', description: 'Post short messages called tweets.' },
      { name: 'Follow users', cost: 0, duration: 4, category: 'Social', id: 26, img: 'path/to/img26', description: 'Follow other users to see their tweets.' },
      { name: 'Retweet', cost: 0, duration: 5, category: 'Social', id: 27, img: 'path/to/img27', description: 'Share tweets from other users.' },
      { name: 'Direct messages', cost: 0, duration: 6, category: 'Communication', id: 28, img: 'path/to/img28', description: 'Send private messages to other users.' }
    ],
    numberFeatures: 45,
    cost: 0,
    id: 7,
    category: 'Social Media',
    img: '',
    developmentDuration: 35,
    description: 'A social media platform for sharing short messages and updates.'
  },
  {
    title: 'Netflix',
    features: [
      { name: 'Watch movies', cost: 25000, duration: 9, category: 'Entertainment', id: 29, img: 'path/to/img29', description: 'Stream a wide variety of movies.' },
      { name: 'Watch TV shows', cost: 25000, duration: 8, category: 'Entertainment', id: 30, img: 'path/to/img30', description: 'Stream a wide variety of TV shows.' },
      { name: 'Create profiles', cost: 25000, duration: 7, category: 'Productivity', id: 31, img: 'path/to/img31', description: 'Create profiles for different users.' },
      { name: 'Offline viewing', cost: 25000, duration: 6, category: 'Entertainment', id: 32, img: 'path/to/img32', description: 'Download content to watch offline.' }
    ],
    numberFeatures: 55,
    cost: 100000,
    id: 8,
    category: 'Entertainment',
    img: '',
    developmentDuration: 50,
    description: 'A streaming service offering a wide variety of TV shows, movies, and more.'
  },
  {
    title: 'Amazon',
    features: [
      { name: 'Shop for products', cost: 20000, duration: 7, category: 'Ecommerce', id: 33, img: 'path/to/img33', description: 'Browse and purchase a wide range of products.' },
      { name: 'Read reviews', cost: 20000, duration: 6, category: 'Customer Insight', id: 34, img: 'path/to/img34', description: 'Read and write reviews for products.' },
      { name: 'Track orders', cost: 20000, duration: 5, category: 'Order Management', id: 35, img: 'path/to/img35', description: 'Track the status of orders and deliveries.' },
      { name: 'Subscribe & Save', cost: 20000, duration: 4, category: 'Ecommerce', id: 36, img: 'path/to/img36', description: 'Subscribe to products for regular delivery and savings.' }
    ],
    numberFeatures: 55,
    cost: 80000,
    id: 9,
    category: 'Shopping',
    img:'',
    developmentDuration: 45,
    description: 'An online marketplace for buying a variety of products.'
  },
  {
    title: 'Snapchat',
    features: [
      { name: 'Send snaps', cost: 15000, duration: 6, category: 'Photos & Videos', id: 37, img: 'path/to/img37', description: 'Send ephemeral photos and videos to friends.' },
      { name: 'View stories', cost: 15000, duration: 7, category: 'Social', id: 38, img: 'path/to/img38', description: 'View stories shared by friends and creators.' },
      { name: 'Discover content', cost: 15000, duration: 8, category: 'Social', id: 39, img: 'path/to/img39', description: 'Discover curated content from publishers and creators.' },
      { name: 'Chat with friends', cost: 15000, duration: 5, category: 'Communication', id: 40, img: 'path/to/img40', description: 'Chat with friends using text, photos, and videos.' }
    ],
    numberFeatures: 35,
    cost: 60000,
    id: 10,
    category: 'Social Media',
    img:'',
    developmentDuration: 30,
    description: 'A multimedia messaging app for sharing moments with friends.'
  },
  {
    title: 'TikTok',
    features: [
      { name: 'Watch short videos', cost: 15000, duration: 4, category: 'Photos & Videos', id: 41, img: 'path/to/img41', description: 'Watch a variety of short-form videos from creators worldwide.' },
      { name: 'Create and share videos', cost: 15000, duration: 5, category: 'Photos & Videos', id: 42, img: 'path/to/img42', description: 'Create and share short videos with music and effects.' },
      { name: 'Explore trends', cost: 15000, duration: 6, category: 'Social', id: 43, img: 'path/to/img43', description: 'Explore trending challenges, hashtags, and content.' },
      { name: 'Follow creators', cost: 15000, duration: 7, category: 'Social', id: 44, img: 'path/to/img44', description: 'Follow your favorite creators and interact with their content.' }
    ],
    numberFeatures: 30,
    cost: 60000,
    id: 11,
    category: 'Entertainment',
    img:'',
    developmentDuration: 35,
    description: 'A platform for short-form mobile videos.'
  },
  {
    title: 'LinkedIn',
    features: [
      { name: 'Professional networking', cost: 20000, duration: 5, category: 'Professional', id: 45, img: 'path/to/img45', description: 'Connect and network with professionals in your industry.' },
      { name: 'Job search', cost: 20000, duration: 6, category: 'Professional', id: 46, img: 'path/to/img46', description: 'Search and apply for jobs based on your profile and interests.' },
      { name: 'Industry news', cost: 20000, duration: 7, category: 'Professional', id: 47, img: 'path/to/img47', description: 'Stay updated with news and insights relevant to your profession.' },
      { name: 'Skill endorsements', cost: 20000, duration: 8, category: 'Professional', id: 48, img: 'path/to/img48', description: 'Endorse and be endorsed for skills by your connections.' }
    ],
    numberFeatures: 40,
    cost: 80000,
    id: 12,
    category: 'Professional',
    img:'',
    developmentDuration: 50,
    description: 'A professional networking platform for career development.'
  },
  {
    title: 'Pinterest',
    features: [
      { name: 'Discover ideas', cost: 15000, duration: 6, category: 'Inspiration', id: 49, img: 'path/to/img49', description: 'Discover creative ideas and inspiration for various projects and interests.' },
      { name: 'Save inspiration', cost: 15000, duration: 5, category: 'Inspiration', id: 50, img: 'path/to/img50', description: 'Save and organize ideas and inspiration for future reference.' },
      { name: 'Plan projects', cost: 15000, duration: 4, category: 'Planning', id: 51, img: 'path/to/img51', description: 'Plan and organize projects, events, and activities.' },
      { name: 'Shop', cost: 15000, duration: 3, category: 'Ecommerce', id: 52, img: 'path/to/img52', description: 'Discover and shop for products based on inspiration.' }
    ],
    numberFeatures: 35,
    cost: 60000,
    id: 13,
    category: 'Social Media',
    img:'',
    developmentDuration: 30,
    description: 'A visual discovery engine for finding ideas and inspiration.'
  },
  {
    title: 'Zoom',
    features: [
      { name: 'Video conferencing', cost: 25000, duration: 8, category: 'Communication', id: 53, img: 'path/to/img53', description: 'Host video meetings with multiple participants.' },
      { name: 'Screen sharing', cost: 25000, duration: 7, category: 'Productivity', id: 54, img: 'path/to/img54', description: 'Share your screen with other meeting participants.' },
      { name: 'Recording meetings', cost: 25000, duration: 6, category: 'Productivity', id: 55, img: 'path/to/img55', description: 'Record your meetings for later reference.' },
      { name: 'Virtual backgrounds', cost: 25000, duration: 5, category: 'Entertainment', id: 56, img: 'path/to/img56', description: 'Add virtual backgrounds to your video feed.' }
    ],
    numberFeatures: 25,
    cost: 100000,
    id: 14,
    category: 'Communication',
    img:'',
    developmentDuration: 60,
    description: 'A platform for video conferencing, screen sharing, and virtual meetings.'
  },
  {
    title: 'Reddit',
    features: [
      { name: 'Community discussions', cost: 20000, duration: 6, category: 'Social', id: 57, img: 'path/to/img57', description: 'Engage in discussions with other users.' },
      { name: 'Share news', cost: 20000, duration: 5, category: 'News', id: 58, img: 'path/to/img58', description: 'Share news articles and stories.' },
      { name: 'Ask questions', cost: 20000, duration: 4, category: 'Social', id: 59, img: 'path/to/img59', description: 'Ask questions and seek advice from the community.' },
      { name: 'Upvote and downvote content', cost: 20000, duration: 3, category: 'Social', id: 60, img: 'path/to/img60', description: 'Vote on posts and comments to determine visibility.' }
    ],
    numberFeatures: 50,
    cost: 80000,
    id: 15,
    category: 'Social Media',
    img:'',
    developmentDuration: 40,
    description: 'An online community where users can share news, content, and engage in discussions.'
  },
  {
    title: 'Microsoft Office',
    features: [
      { name: 'Word processing', cost: 37500, duration: 9, category: 'Productivity', id: 61, img: 'path/to/img61', description: 'Create and edit documents with advanced formatting options.' },
      { name: 'Spreadsheets', cost: 37500, duration: 8, category: 'Productivity', id: 62, img: 'path/to/img62', description: 'Create and manage spreadsheets for data analysis.' },
      { name: 'Presentations', cost: 37500, duration: 7, category: 'Productivity', id: 63, img: 'path/to/img63', description: 'Create visually engaging presentations with slides and multimedia.' },
      { name: 'Email', cost: 37500, duration: 6, category: 'Communication', id: 64, img: 'path/to/img64', description: 'Manage emails and communicate with colleagues.' }
    ],
    numberFeatures: 60,
    cost: 150000,
    id: 16,
    category: 'Productivity',
    img:'',
    developmentDuration: 90,
    description: 'A suite of productivity applications including Word, Excel, PowerPoint, and Outlook.'
  },
  {
    title: 'YouTube',
    features: [
      { name: 'Watch videos', cost: 20000, duration: 7, category: 'Entertainment', id: 65, img: 'path/to/img65', description: 'Enjoy a wide range of videos on various topics.' },
      { name: 'Upload videos', cost: 20000, duration: 6, category: 'Entertainment', id: 66, img: 'path/to/img66', description: 'Share your own videos with the world.' },
      { name: 'Subscribe to channels', cost: 20000, duration: 5, category: 'Entertainment', id: 67, img: 'path/to/img67', description: 'Stay updated with content from your favorite creators.' },
      { name: 'Comment and like', cost: 20000, duration: 4, category: 'Social', id: 68, img: 'path/to/img68', description: 'Engage with videos by leaving comments and likes.' }
    ],
    numberFeatures: 55,
    cost: 80000,
    id: 17,
    category: 'Entertainment',
    img:'',
    developmentDuration: 40,
    description: 'A video-sharing platform where users can watch, upload, and interact with videos.'
  },
  {
    title: 'Weather App',
    features: [
      { name: 'Current weather', cost: 25000, duration: 3, category: 'Utilities', id: 69, img: 'path/to/img69', description: 'Check the current weather conditions in your area.' },
      { name: 'Hourly forecast', cost: 25000, duration: 4, category: 'Utilities', id: 70, img: 'path/to/img70', description: 'View the hourly weather forecast for the day.' },
      { name: 'Daily forecast', cost: 25000, duration: 5, category: 'Utilities', id: 71, img: 'path/to/img71', description: 'Get a forecast for the upcoming days.' },
      { name: 'Weather alerts', cost: 25000, duration: 6, category: 'Utilities', id: 72, img: 'path/to/img72', description: 'Receive alerts for severe weather conditions.' }
    ],
    numberFeatures: 20,
    cost: 100000,
    id: 18,
    category: 'Utilities',
    img:'',
    developmentDuration: 50,
    description: 'An app that provides weather forecasts and alerts for users.'
  },
  {
    title: 'Adobe Photoshop Express',
    features: [
      { name: 'Edit photos', cost: 25000, duration: 5, category: 'Photography', id: 73, img: 'path/to/img73', description: 'Edit and enhance your photos with powerful editing tools.' },
      { name: 'Apply filters', cost: 25000, duration: 6, category: 'Photography', id: 74, img: 'path/to/img74', description: 'Apply artistic filters to your images for unique effects.' },
      { name: 'Remove blemishes', cost: 25000, duration: 7, category: 'Photography', id: 75, img: 'path/to/img75', description: 'Easily remove imperfections from your photos.' },
      { name: 'Add text', cost: 25000, duration: 8, category: 'Photography', id: 76, img: 'path/to/img76', description: 'Add text captions and annotations to your images.' }
    ],
    numberFeatures: 30,
    cost: 100000,
    id: 19,
    category: 'Photography',
    img:'',
    developmentDuration: 40,
    description: 'A mobile photo editing app with various editing tools and filters.'
  },
  {
    title: 'Duolingo',
    features: [
      { name: 'Language learning', cost: 20000, duration: 6, category: 'Education', id: 77, img: 'path/to/img77', description: 'Learn languages through interactive exercises and lessons.' },
      { name: 'Interactive lessons', cost: 20000, duration: 7, category: 'Education', id: 78, img: 'path/to/img78', description: 'Engage with lessons that adapt to your learning style.' },
      { name: 'Practice speaking', cost: 20000, duration: 8, category: 'Education', id: 79, img: 'path/to/img79', description: 'Improve your speaking skills with voice-recognition exercises.' },
      { name: 'Track progress', cost: 20000, duration: 9, category: 'Education', id: 80, img: 'path/to/img80', description: 'Monitor your learning progress and set goals.' }
    ],
    numberFeatures: 40,
    cost: 80000,
    id: 20,
    category: 'Education',
    img:'',
    developmentDuration: 35,
    description: 'A language-learning platform offering interactive lessons and personalized learning experiences.'
  },
  {
    title: 'Airbnb',
    features: [
      { name: 'Book accommodation', cost: 20000, duration: 7, category: 'Travel', id: 81, img: 'path/to/img81', description: 'Find and book unique accommodations worldwide.' },
      { name: 'Host listing', cost: 20000, duration: 6, category: 'Travel', id: 82, img: 'path/to/img82', description: 'List your property and start earning from bookings.' },
      { name: 'Search properties', cost: 20000, duration: 5, category: 'Travel', id: 83, img: 'path/to/img83', description: 'Discover properties based on your preferences and budget.' },
      { name: 'Reviews and ratings', cost: 20000, duration: 4, category: 'Travel', id: 84, img: 'path/to/img84', description: 'Read reviews and ratings from other travelers to make informed decisions.' }
    ],
    numberFeatures: 30,
    cost: 80000,
    id: 21,
    category: 'Travel',
    img:'',
    developmentDuration: 45,
    description: 'A platform for booking accommodations and hosting experiences.'
  },
  {
    title: 'Slack',
    features: [
      { name: 'Team messaging', cost: 25000, duration: 8, category: 'Communication', id: 85, img: 'path/to/img85', description: 'Communicate and collaborate with your team in real-time.' },
      { name: 'File sharing', cost: 25000, duration: 7, category: 'Productivity', id: 86, img: 'path/to/img86', description: 'Share files and documents securely within your team.' },
      { name: 'Channel organization', cost: 25000, duration: 6, category: 'Productivity', id: 87, img: 'path/to/img87', description: 'Organize conversations and projects into channels for easy management.' },
      { name: 'Integrations', cost: 25000, duration: 5, category: 'Productivity', id: 88, img: 'path/to/img88', description: 'Integrate with other tools and services to streamline workflows.' }
    ],
    numberFeatures: 40,
    cost: 100000,
    id: 22,
    category: 'Productivity',
    img:'',
    developmentDuration: 60,
    description: 'A messaging platform for teams that facilitates communication and collaboration.'
  },
  {
    title: 'Trello',
    features: [
      { name: 'Task management', cost: 20000, duration: 6, category: 'Productivity', id: 89, img: 'path/to/img89', description: 'Organize tasks and projects with customizable boards.' },
      { name: 'Board organization', cost: 20000, duration: 5, category: 'Productivity', id: 90, img: 'path/to/img90', description: 'Arrange boards and lists to fit your workflow.' },
      { name: 'Card assignments', cost: 20000, duration: 4, category: 'Productivity', id: 91, img: 'path/to/img91', description: 'Assign tasks to team members and track progress.' },
      { name: 'Calendar view', cost: 20000, duration: 3, category: 'Productivity', id: 92, img: 'path/to/img92', description: 'View tasks and deadlines in a calendar format.' }
    ],
    numberFeatures: 35,
    cost: 80000,
    id: 23,
    category: 'Productivity',
    img:'',
    developmentDuration: 50,
    description: 'A collaboration tool that organizes your projects into boards and helps you manage tasks.'
  },
  {
    title: 'Asana',
    features: [
      { name: 'Project management', cost: 25000, duration: 6, category: 'Productivity', id: 93, img: 'path/to/img93', description: 'Manage projects and tasks with customizable workflows.' },
      { name: 'Task tracking', cost: 25000, duration: 7, category: 'Productivity', id: 94, img: 'path/to/img94', description: 'Track tasks and deadlines to ensure timely completion.' },
      { name: 'Collaboration tools', cost: 25000, duration: 8, category: 'Productivity', id: 95, img: 'path/to/img95', description: 'Collaborate with team members in real-time with built-in communication tools.' },
      { name: 'Reporting', cost: 25000, duration: 9, category: 'Productivity', id: 96, img: 'path/to/img96', description: 'Generate reports to analyze project progress and performance.' }
    ],
    numberFeatures: 40,
    cost: 100000,
    id: 24,
    category: 'Productivity',
    img:'',
    developmentDuration: 60,
    description: 'A project management tool that helps teams organize work and collaborate more effectively.'
  },
  {
    title: 'Fitbit',
    features: [
      { name: 'Step tracking', cost: 20000, duration: 4, category: 'Health & Fitness', id: 97, img: 'path/to/img97', description: 'Track your daily steps to monitor physical activity.' },
      { name: 'Heart rate monitoring', cost: 20000, duration: 5, category: 'Health & Fitness', id: 98, img: 'path/to/img98', description: 'Monitor your heart rate during exercise and throughout the day.' },
      { name: 'Sleep analysis', cost: 20000, duration: 6, category: 'Health & Fitness', id: 99, img: 'path/to/img99', description: 'Analyze your sleep patterns and quality to improve rest.' },
      { name: 'Exercise modes', cost: 20000, duration: 7, category: 'Health & Fitness', id: 100, img: 'path/to/img100', description: 'Access various exercise modes and workouts for different fitness goals.' }
    ],
    numberFeatures: 25,
    cost: 80000,
    id: 25,
    category: 'Health & Fitness',
    img:'',
    developmentDuration: 35,
    description: 'A fitness tracker that helps users monitor activity, sleep, and exercise.'
  },
  {
    title: 'Grubhub',
    features: [
      { name: 'Browse restaurants', cost: 15000, duration: 4, category: 'Food & Drink', id: 101, img: 'path/to/img101', description: 'Discover local restaurants and browse menus for delivery or pickup.' },
      { name: 'Order food', cost: 15000, duration: 5, category: 'Food & Drink', id: 102, img: 'path/to/img102', description: 'Place food orders from your favorite restaurants for delivery or pickup.' },
      { name: 'Track delivery', cost: 15000, duration: 6, category: 'Food & Drink', id: 103, img: 'path/to/img103', description: 'Track the status of your food delivery in real-time.' },
      { name: 'Leave reviews', cost: 15000, duration: 7, category: 'Food & Drink', id: 104, img: 'path/to/img104', description: 'Rate and review restaurants based on your dining experience.' }
    ],
    numberFeatures: 30,
    cost: 60000,
    id: 26,
    category: 'Food & Drink',
    img:'',
    developmentDuration: 30,
    description: 'An online food ordering and delivery platform connecting users with local restaurants.'
  },
  {
    title: 'Venmo',
    features: [
      { name: 'Send money', cost: 25000, duration: 3, category: 'Finance', id: 105, img: 'path/to/img105', description: 'Send money to friends and family instantly.' },
      { name: 'Request payments', cost: 25000, duration: 4, category: 'Finance', id: 106, img: 'path/to/img106', description: 'Request payments from friends or clients.' },
      { name: 'Transaction history', cost: 25000, duration: 5, category: 'Finance', id: 107, img: 'path/to/img107', description: 'View your transaction history and details.' },
      { name: 'Bank transfers', cost: 25000, duration: 6, category: 'Finance', id: 108, img: 'path/to/img108', description: 'Transfer money between your bank and Venmo account.' }
    ],
    numberFeatures: 25,
    cost: 100000,
    id: 27,
    category: 'Finance',
    img:'',
    developmentDuration: 40,
    description: 'A mobile payment service that allows users to transfer money and make payments.'
  },
  {
    title: 'Robinhood',
    features: [
      { name: 'Stock trading', cost: 25000, duration: 6, category: 'Finance', id: 109, img: 'path/to/img109', description: 'Buy and sell stocks and ETFs commission-free.' },
      { name: 'Market data', cost: 25000, duration: 7, category: 'Finance', id: 110, img: 'path/to/img110', description: 'Access real-time market data and quotes.' },
      { name: 'Portfolio tracking', cost: 25000, duration: 8, category: 'Finance', id: 111, img: 'path/to/img111', description: 'Track the performance of your investments.' },
      { name: 'News updates', cost: 25000, duration: 9, category: 'Finance', id: 112, img: 'path/to/img112', description: 'Stay updated with financial news and analysis.' }
    ],
    numberFeatures: 35,
    cost: 100000,
    id: 28,
    category: 'Finance',
    img:'',
    developmentDuration: 50,
    description: 'A commission-free stock trading app that provides market data and portfolio management tools.'
  },
  {
    title: 'Coursera',
    features: [
      { name: 'Browse courses', cost: 20000, duration: 4, category: 'Education', id: 113, img: 'path/to/img113', description: 'Explore thousands of courses across various subjects.' },
      { name: 'Enroll in classes', cost: 20000, duration: 5, category: 'Education', id: 114, img: 'path/to/img114', description: 'Enroll in courses to start learning.' },
      { name: 'Video lectures', cost: 20000, duration: 6, category: 'Education', id: 115, img: 'path/to/img115', description: 'Watch video lectures from top instructors.' },
      { name: 'Certificates', cost: 20000, duration: 7, category: 'Education', id: 116, img: 'path/to/img116', description: 'Earn certificates upon course completion.' }
    ],
    numberFeatures: 40,
    cost: 80000,
    id: 29,
    category: 'Education',
    img:'',
    developmentDuration: 45,
    description: 'An online learning platform offering courses taught by top instructors from universities and organizations worldwide.'
  },
  {
    title: 'Khan Academy',
    features: [
      { name: 'Video lessons', cost: 15000, duration: 6, category: 'Education', id: 117, img: 'path/to/img117', description: 'Access educational video lessons on various subjects.' },
      { name: 'Practice exercises', cost: 15000, duration: 5, category: 'Education', id: 118, img: 'path/to/img118', description: 'Practice exercises to reinforce learning.' },
      { name: 'Progress tracking', cost: 15000, duration: 4, category: 'Education', id: 119, img: 'path/to/img119', description: 'Track your learning progress over time.' },
      { name: 'Test preparation', cost: 15000, duration: 3, category: 'Education', id: 120, img: 'path/to/img120', description: 'Prepare for exams with specialized test preparation materials.' }
    ],
    numberFeatures: 35,
    cost: 60000,
    id: 30,
    category: 'Education',
    img:'',
    developmentDuration: 35,
    description: 'A non-profit educational organization providing free online courses, lessons, and practice.'
  },
  {
    title: 'Codecademy',
    features: [
      { name: 'Interactive coding', cost: 20000, duration: 6, category: 'Education', id: 121, img: 'path/to/img121', description: 'Learn to code interactively through guided exercises.' },
      { name: 'Projects', cost: 20000, duration: 7, category: 'Education', id: 122, img: 'path/to/img122', description: "Work on real-world projects to apply what you've learned. "},
      { name: 'Quizzes', cost: 20000, duration: 8, category: 'Education', id: 123, img: 'path/to/img123', description: 'Test your knowledge with quizzes after each lesson.' },
      { name: 'Career paths', cost: 20000, duration: 9, category: 'Education', id: 124, img: 'path/to/img124', description: 'Explore career paths and find the right one for you.' }
    ],
    numberFeatures: 40,
    cost: 80000,
    id: 31,
    category: 'Education',
    img:'',
    developmentDuration: 40,
    description: 'An interactive platform for learning to code with guided exercises, projects, quizzes, and career path exploration.'
  }
];

