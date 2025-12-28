const products = [
  {
    name: 'Smartwatch X1',
    id: 'smartwatch-x1-e4f8c',
    title: 'Experience the Future on Your Wrist',
    description:
      "Track your fitness, monitor your health, and stay connected with the Smartwatch X1. Featuring a vibrant display, long-lasting battery, and advanced sensors, it's designed for an active lifestyle. Receive notifications, control music, and much more right from your wrist.",
    frontMatter: {
      description:
        'Track fitness, monitor health, and stay connected with Smartwatch X1. Vibrant display, long battery, advanced sensors for an active lifestyle. Notifications, music control on wrist.',

      summary:
        'Smartwatch X1: Your ultimate wrist companion for health, fitness, and connectivity. Vibrant, long-lasting, and packed with advanced features.',
    },
  },
  {
    name: 'Wireless Earbuds Pro',
    id: 'earbuds-pro-a1b2c',
    title: 'Immersive Audio, Uninterrupted Freedom',
    description:
      'Dive into pure sound with Wireless Earbuds Pro. Active noise cancellation blocks distractions, while transparency mode keeps you aware of your surroundings. Enjoy crystal-clear calls, powerful bass, and a comfortable, secure fit for all-day listening pleasure.',
    frontMatter: {
      description:
        'Wireless Earbuds Pro: Immersive audio with active noise cancellation. Crystal-clear calls, powerful bass, and comfortable fit for all-day listening.',

      summary:
        'Wireless Earbuds Pro deliver immersive audio with ANC, clear calls, and deep bass. Comfortable, secure fit for uninterrupted listening pleasure.',
    },
  },
  {
    name: 'Portable Bluetooth Speaker',
    id: 'bt-speaker-d7e9f',
    title: 'Sound That Travels With You',
    description:
      "Take your music anywhere with this Portable Bluetooth Speaker. Its rugged design is perfect for outdoor adventures, while rich, deep bass and crisp highs fill any space. Easy to connect, with a long-lasting battery, it's your ultimate travel companion.",
    frontMatter: {
      description:
        'Portable Bluetooth Speaker: Take your music anywhere. Rugged design, rich bass, crisp highs. Easy to connect, long-lasting battery. Your ultimate travel companion.',

      summary:
        'Portable Bluetooth Speaker for music on the go. Rugged, powerful sound, easy to connect. Perfect for outdoor adventures and travel.',
    },
  },
  {
    name: 'Noise-Cancelling Headphones',
    id: 'nc-headphones-g3h4i',
    title: 'Silence the World, Amplify Your Music',
    description:
      'Escape into your audio with premium Noise-Cancelling Headphones. Advanced technology eliminates distractions, allowing you to focus on your music, podcasts, or calls. Enjoy exceptional comfort, superior sound quality, and a sleek design for an unparalleled listening experience, wherever you are.',
    frontMatter: {
      description:
        'Premium Noise-Cancelling Headphones: Escape into audio. Eliminate distractions, focus on music, podcasts, or calls. Exceptional comfort, superior sound quality.',

      summary:
        'Noise-Cancelling Headphones: Immerse yourself in superior audio. Blocks distractions, offers comfort, and delivers exceptional sound quality.',
    },
  },
  {
    name: '4K Smart TV',
    id: '4k-smart-tv-j5k6l',
    title: 'Unleash Cinematic Brilliance at Home',
    description:
      'Immerse yourself in stunning detail with our 4K Smart TV. Experience lifelike colors and incredible clarity on a large, vibrant display. Built-in smart features provide instant access to your favorite streaming apps, transforming your living room into an entertainment hub with ease.',
    frontMatter: {
      description:
        '4K Smart TV: Immerse in stunning detail, lifelike colors, incredible clarity. Access streaming apps, transform living room into entertainment hub.',

      summary:
        '4K Smart TV for cinematic brilliance at home. Stunning detail, lifelike colors, smart features for all your entertainment needs.',
    },
  },
  {
    name: 'Robot Vacuum Cleaner',
    id: 'robot-vac-m8n9o',
    title: 'Effortless Cleaning, Every Single Day',
    description:
      'Let the Robot Vacuum Cleaner do the work for you. Smart navigation maps your home, ensuring thorough cleaning on all floor types. Control it with your voice or smartphone, and enjoy a consistently spotless home without lifting a finger. Perfect for busy households.',
    frontMatter: {
      description:
        'Robot Vacuum Cleaner: Effortless daily cleaning. Smart navigation, thorough cleaning on all floors. Voice/smartphone control for a spotless home.',

      summary:
        'Robot Vacuum Cleaner: Enjoy effortless daily cleaning. Smart navigation, voice control, and spotless results for busy households.',
    },
  },
  {
    name: 'Smart Home Hub',
    id: 'smarthome-hub-p0q1r',
    title: 'Connect Your Home, Simplify Your Life',
    description:
      'Manage all your smart devices from one central Smart Home Hub. Control lights, thermostats, security cameras, and more with a single app or voice commands. Create custom routines to automate your home, making everyday living more convenient, secure, and energy-efficient.',
    frontMatter: {
      description:
        'Smart Home Hub: Manage all smart devices centrally. Control lights, thermostats, cameras with app/voice. Automate home for convenience, security, efficiency.',

      summary:
        'Smart Home Hub: Connect and simplify your home. Manage smart devices, automate routines, and enhance convenience, security, and efficiency.',
    },
  },
  {
    name: 'Action Camera 4K',
    id: 'action-cam-s2t3u',
    title: 'Capture Every Adventure in Stunning 4K',
    description:
      "Document your most thrilling moments with the Action Camera 4K. Waterproof, durable, and packed with features like image stabilization and slow-motion recording, it's built for extreme conditions. Share your adventures in breathtaking clarity, from the mountain peaks to the ocean depths.",
    frontMatter: {
      description:
        'Action Camera 4K: Capture thrilling moments in stunning 4K. Waterproof, durable, image stabilization, slow-motion. Built for extreme conditions. Share adventures.',

      summary:
        'Action Camera 4K: Capture every adventure in stunning detail. Waterproof, durable, and packed with features for extreme conditions.',
    },
  },
  {
    name: 'Gaming Laptop Beast',
    id: 'gaming-laptop-v4w5x',
    title: 'Dominate the Game, Unleash Peak Performance',
    description:
      'Experience unparalleled gaming with the Gaming Laptop Beast. Featuring a powerful processor, dedicated graphics, and a high-refresh-rate display, it delivers smooth, immersive gameplay. Stay cool under pressure with advanced cooling technology, ensuring optimal performance during intense gaming sessions and competitive play.',
    frontMatter: {
      description:
        'Gaming Laptop Beast: Dominate games with unparalleled performance. Powerful processor, dedicated graphics, high-refresh display, advanced cooling for intense sessions.',

      summary:
        'Gaming Laptop Beast: Unleash peak performance and dominate every game. Powerful specs, immersive display, and advanced cooling technology.',
    },
  },
  {
    name: 'Ergonomic Office Chair',
    id: 'office-chair-y6z7a',
    title: 'Work in Comfort, Boost Your Productivity',
    description:
      'Upgrade your workspace with this Ergonomic Office Chair. Designed for maximum support and comfort, it reduces strain during long hours of work. Adjustable features allow you to customize it to your body, promoting better posture and enhanced focus throughout your workday.',
    frontMatter: {
      description:
        'Ergonomic Office Chair: Work in comfort, boost productivity. Maximum support, reduces strain. Adjustable for better posture and enhanced focus.',

      summary:
        'Ergonomic Office Chair: Boost productivity and work in comfort. Designed for maximum support, better posture, and enhanced focus.',
    },
  },
  {
    name: 'Electric Toothbrush Sonic',
    id: 'toothbrush-b8c9d',
    title: 'Achieve a Brighter, Healthier Smile',
    description:
      'Transform your oral care routine with the Electric Toothbrush Sonic. High-frequency vibrations deliver a superior clean, removing more plaque than a manual brush. Multiple brushing modes and a built-in timer ensure thorough cleaning, promoting healthier gums and a dazzling smile every day.',
    frontMatter: {
      description:
        'Electric Toothbrush Sonic: Brighter, healthier smile. Superior clean, removes more plaque. Multiple modes, timer for thorough cleaning, healthier gums.',

      summary:
        'Electric Toothbrush Sonic: Transform your oral care for a brighter, healthier smile. Superior clean, multiple modes, and built-in timer.',
    },
  },
  {
    name: 'Air Fryer XXL',
    id: 'air-fryer-e0f1g',
    title: 'Crispy, Delicious Meals with Less Oil',
    description:
      'Enjoy guilt-free indulgence with the Air Fryer XXL. Cook your favorite fried foods to crispy perfection using little to no oil. Its large capacity handles family-sized portions, while pre-set programs and easy controls make meal prep a breeze for any culinary enthusiast.',
    frontMatter: {
      description:
        'Air Fryer XXL: Crispy, delicious meals with less oil. Guilt-free indulgence, large capacity, pre-set programs for easy meal prep. Perfect for families.',

      summary:
        'Air Fryer XXL: Enjoy crispy, delicious, guilt-free meals with less oil. Large capacity and easy controls for quick meal prep.',
    },
  },
  {
    name: 'Coffee Maker Deluxe',
    id: 'coffee-maker-h2i3j',
    title: 'Your Perfect Brew, Every Single Morning',
    description:
      'Start your day right with the Coffee Maker Deluxe. Program your brew to wake up to the aroma of fresh coffee, or choose from multiple strength settings for a personalized cup. Its elegant design and intuitive controls make it a stylish and essential addition to any kitchen.',
    frontMatter: {
      description:
        'Coffee Maker Deluxe: Perfect brew every morning. Program brew, multiple strength settings. Elegant design, intuitive controls. Essential kitchen addition.',

      summary:
        'Coffee Maker Deluxe: Your perfect brew for every morning. Programmable, customizable, and a stylish addition to any kitchen.',
    },
  },
  {
    name: 'Fitness Tracker Band',
    id: 'fitness-band-k4l5m',
    title: 'Stay Active, Track Your Progress Daily',
    description:
      'Achieve your health goals with the Fitness Tracker Band. Monitor your steps, distance, calories burned, and sleep patterns. Its slim design is comfortable for all-day wear, providing valuable insights into your activity levels and helping you stay motivated on your wellness journey.',
    frontMatter: {
      description:
        'Fitness Tracker Band: Stay active, track progress daily. Monitor steps, distance, calories, sleep. Comfortable, valuable insights for wellness journey.',

      summary:
        'Fitness Tracker Band: Stay active and motivated. Track steps, calories, sleep for valuable insights into your daily wellness.',
    },
  },
  {
    name: 'External SSD Drive',
    id: 'ssd-drive-n6o7p',
    title: 'Lightning-Fast Storage for All Your Files',
    description:
      'Expand your storage and speed up data transfers with the External SSD Drive. Enjoy rapid read and write speeds, making it ideal for large files, backups, and portable work. Its compact and durable design ensures your important data is safe and accessible wherever you go.',
    frontMatter: {
      description:
        'External SSD Drive: Lightning-fast storage. Rapid read/write speeds for large files, backups, portable work. Compact, durable, safe and accessible data.',

      summary:
        'External SSD Drive: Lightning-fast, compact storage for all your files. Rapid speeds, durable design, and secure data access anywhere.',
    },
  },
];

export default products;
