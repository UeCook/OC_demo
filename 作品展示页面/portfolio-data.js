// ==================== 
// 作品数据
// ==================== 
const portfolioData = [
    {
        id: 1,
        title: "数字艺术作品 #1",
        summary: "未来城市的数字艺术构想，融合科技与人文的视觉表达。",
        description: "这是一幅关于未来城市的数字艺术作品，通过精细的光影处理和独特的色彩搭配，展现了一个充满科技感与人文气息的未来世界。作品采用了数字绘画技术，耗时约40小时完成。\n\n在这个作品中，我试图探索高科技城市背景下人性的温度。画面中高耸入云的摩天大楼与街头巷尾的温暖灯光形成对比，飞行的交通工具与步行的人们共存。我希望通过这幅作品传达出：无论科技如何发展，人类的情感与连接始终是最珍贵的。\n\n创作过程中，我参考了大量的科幻电影和概念艺术作品，同时也融入了自己对未来城市的想象。每一个细节都经过反复推敲，从建筑的轮廓到光影的角度，都力求达到最佳的视觉效果。",
        image: "images/work1",
        thumbnail: null,
        tags: ["数字艺术", "科幻", "未来主义"],
        category: "illustration",
        featured: true,
        date: "2024-01-15",
        artist: "圣堂之魂",
        status: "常稿",
        pinned: true,
        metadata: {
            platform: "个人创作"
        }
    },
    {
        id: 2,
        title: "角色设计 - 晨曦",
        summary: "原创治愈系守护者角色，温暖与神秘并存的形象设计。",
        description: "为原创角色晨曦设计的一套完整形象，包括三视图、服装设计和表情包。角色设定为一个拥有治愈能力的守护者，整体风格温暖而神秘。\n\n晨曦是一个在黎明时分出现的神秘少女，她拥有抚慰心灵创伤的特殊能力。她的服饰设计融入了朝阳的元素，以暖色调为主，搭配流动感十足的裙摆，象征着她带来的希望与新生。\n\n设计这套形象时，我花了大量时间研究光影在人体上的表现，特别是早晨柔和阳光下的色调变化。角色的每一个细节都有其象征意义：发饰代表着初升的朝阳，腰间的挂饰是她收集的人们的心愿，而那双温柔的眼睛则能够看透人内心最深处的伤痛。",
        image: "images/work2",
        thumbnail: null,
        tags: ["角色设计", "原创", "治愈"],
        category: "character",
        featured: true,
        date: "2024-02-20",
        artist: "圣堂之魂",
        status: "买断",
        pinned: false,
        metadata: {
            platform: "个人创作"
        }
    },
    {
        id: 3,
        title: "插画作品 - 森林物语",
        summary: "童话森林中的神奇生物，手绘与数字结合的梦幻创作。",
        description: "一幅充满童话色彩的森林主题插画，描绘了森林中各种神奇生物和谐共处的场景。使用了手绘与数字绘画结合的技法，营造梦幻氛围。\n\n这幅作品的灵感来源于童年时阅读的童话书和那些关于森林精灵的传说。我想象了一个隐秘的森林世界，在那里，小精灵、树精、发光蘑菇和各种奇妙的生物和平共处。画面中央是一棵巨大的古树，它是整个森林的心脏，也是所有生命的源泉。\n\n创作过程中，我先用传统的水彩手绘了背景的大致色调，然后在数字软件中进行细节的刻画和光影的调整。这种混合媒介的方式让我既能保持手绘的质感，又能实现数字绘画的精细控制。整个创作历时两个月，是我迄今为止最用心的作品之一。",
        image: "images/work3",
        thumbnail: null,
        tags: ["插画", "奇幻", "童话"],
        category: "illustration",
        featured: false,
        date: "2024-03-10",
        artist: "圣堂之魂",
        status: "常稿",
        pinned: false,
        metadata: {
            platform: "个人创作"
        }
    },
    {
        id: 4,
        title: "概念设计 - 赛博朋克",
        summary: "游戏场景概念设计，霓虹与阴雨交织的赛博朋克美学。",
        description: "为一款未发布的游戏创作的赛博朋克风格场景概念设计。作品重点表现了霓虹灯与阴雨城市的对比，突出了赛博朋克的核心美学。\n\n这个项目要求我设计一个既要有典型赛博朋克元素，又要有独特辨识度的游戏世界。我在传统的霓虹灯、义体改造、巨型企业的设定基础上，加入了自己对东方美学的理解。画面中的街道既有典型的赛博朋克元素，也有传统亚洲建筑的影子。\n\n氛围营造是这幅作品的重点。我通过多层雾效、雨水的反射、霓虹灯的辉光来营造那种潮湿而迷幻的感觉。每一盏灯的位置、每一滴雨的轨迹都经过精心设计，力求让玩家在看到这个场景时就能感受到那个世界的温度与气息。",
        image: "images/work4",
        thumbnail: null,
        tags: ["概念设计", "游戏美术", "赛博朋克"],
        category: "concept",
        featured: true,
        date: "2024-04-05",
        artist: "圣堂之魂",
        status: "商用",
        pinned: false,
        metadata: {
            platform: "游戏外包"
        }
    },
    {
        id: 5,
        title: "像素艺术 - 复古游戏",
        summary: "8-bit像素艺术创作，致敬复古游戏时代的怀旧之作。",
        description: "向8-bit时代致敬的像素艺术作品，为一款复古风格游戏创作的角色和场景设计。每一颗像素都经过精心打磨，追求完美的怀旧感。\n\n在这个高清画质泛滥的时代，像素艺术反而因其独特的美学和创作限制而显得更加珍贵。我为一款独立游戏创作了全套的像素美术资源，包括主角、敌人、场景道具和UI元素。在有限的像素空间内表达丰富的信息是这个创作的最大挑战。\n\n我研究了80、90年代经典游戏的像素艺术风格，学习那些大师们如何在极低的分辨率下创造出生动的角色。每一个角色的动作都需要逐帧绘制，每一个场景都需要考虑色彩限制。这个过程虽然繁琐，但也让我重新体会到了游戏美术最纯粹的快乐。",
        image: "images/work5",
        thumbnail: null,
        tags: ["像素艺术", "复古", "游戏"],
        category: "pixel",
        featured: false,
        date: "2024-05-18",
        artist: "圣堂之魂",
        status: "常稿",
        pinned: false,
        metadata: {
            platform: "独立游戏"
        }
    },
    {
        id: 6,
        title: "动画短片 - 星辰之梦",
        summary: "2分钟原创动画短片，关于追逐梦想的独立制作。",
        description: "一部2分钟的原创动画短片，讲述了一个关于追逐梦想的故事。从故事板到最终动画，全程独立制作，使用了After Effects和Clip Studio Paint。\n\n《星辰之梦》讲述了一个小女孩每晚都梦想着能够摘到星星，于是她制作了一架纸飞机，经过无数次失败后终于飞向了星空的故事。这个简单的寓言寄托了我对追梦的理解：梦想看似遥不可及，但只要坚持，总有一天能够触及。\n\n作为一部个人独立制作的短片，我承担了从剧本、分镜、原画、动画到后期合成的所有工作。整整六个月的时间，每天都在与时间和技术难题赛跑。当看到最终成片的那一刻，所有的辛苦都化为了满足感。这部短片后来也在几个小型动画节上展映，收到了很多鼓励的反馈。",
        image: "images/work6",
        thumbnail: null,
        tags: ["动画", "短片", "原创"],
        category: "animation",
        featured: true,
        date: "2024-06-30",
        artist: "圣堂之魂",
        status: "私人",
        pinned: false,
        metadata: {
            platform: "个人创作"
        }
    }
];

// ==================== 
// 作品展示管理器
// ==================== 
const PortfolioManager = {
    data: portfolioData,
    
    getAll() {
        return this.data;
    },
    
    getByCategory(category) {
        return this.data.filter(item => item.category === category);
    },
    
    getFeatured() {
        return this.data.filter(item => item.featured);
    },
    
    getByTag(tag) {
        return this.data.filter(item => item.tags.includes(tag));
    },
    
    getById(id) {
        return this.data.find(item => item.id === id);
    },
    
    getSortedByDate() {
        return [...this.data].sort((a, b) => b.date.localeCompare(a.date));
    },
    
    getPinned() {
        return this.data.filter(item => item.pinned);
    },
    
    getRandomizedWithPinned() {
        const pinned = this.getPinned();
        const unpinned = this.data.filter(item => !item.pinned);
        
        // 随机打乱未置顶的卡片
        const shuffled = [...unpinned];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        
        // 置顶卡片在前，后面跟随随机排序的卡片
        return [...pinned, ...shuffled];
    },
    
    getCategories() {
        const categories = [...new Set(this.data.map(item => item.category))];
        return categories.map(cat => ({
            id: cat,
            name: this.getCategoryName(cat),
            count: this.data.filter(item => item.category === cat).length
        }));
    },
    
    getCategoryName(category) {
        const names = {
            illustration: "插画",
            character: "角色设计",
            concept: "概念设计",
            pixel: "像素艺术",
            animation: "动画"
        };
        return names[category] || category;
    },
    
    getAllTags() {
        const tagSet = new Set();
        this.data.forEach(item => item.tags.forEach(tag => tagSet.add(tag)));
        return Array.from(tagSet);
    },
    
    getImageUrl(item, useThumbnail = false) {
        if (useThumbnail && item.thumbnail) {
            return item.thumbnail;
        }
        return item.image;
    }
};
