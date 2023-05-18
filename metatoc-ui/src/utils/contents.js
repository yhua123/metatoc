const initChatString =
  '[{"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16187929.jpeg"],"chat":"What is Fermat\'s Last Theorem? (Demonstration data)","createAt":1681803979226,"reply":"Fermat\'s Last Theorem, proposed by Pierre de Fermat in 1637, states that no three positive integers a, b, and c satisfy the equation an + bn = cn for any integer value of n greater than 2. This theorem was famously proved by Andrew Wiles in 1994, after more than 350 years of effort by mathematicians to solve it.","state":"on-chain","updateAt":1681803979226,"users":["Emily Johnson"],"uuid":"0298c58f-7e1c-401a-8f8f-b6c785d779c9"},{"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16161525.jpeg"],"chat":"What is the largest star in the universe? (Demonstration data)","createAt":1681803979226,"reply":"The largest star currently known is UY Scuti, which has a radius around 1,700 times larger than the Sun. However, there may be even larger stars that have not been discovered yet.","state":"on-chain","updateAt":1681803979226,"users":["Michael Smith"],"uuid":"c44bff6c-8dcb-40be-b73f-b14b72d7ce47"},{"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16196205.jpeg"],"chat":"Can you use Go to write a code that collects CPU and memory? (Demonstration data)","createAt":1681803979226,"reply":"Yes, it\'s possible to use Go language to collect CPU and memory usage of a program or system.\\n\\nGo provides standard library packages such as \\"runtime\\" and \\"os\\" which can be used to gather information about system resources such as CPU usage, memory usage, and more.\\n\\nFor example, you can use the \\"runtime\\" package to get information about the current Go process:\\n\\n```go\\nimport \\"runtime\\"\\n\\nfunc main() {\\n    memStats := &runtime.MemStats{}\\n    runtime.ReadMemStats(memStats)\\n    // memStats now contains the memory usage statistics for the current process\\n}\\n```\\n\\nSimilarly, you can use the \\"os\\" package to get information about the overall system:\\n\\n```go\\nimport (\\n    \\"fmt\\"\\n    \\"os\\"\\n)\\n\\nfunc main() {\\n    stat := &syscall.Statfs_t{}\\n\\n    err := syscall.Statfs(\\"/\\", stat)\\n    if err != nil {\\n        fmt.Println(\\"Error getting file system stats:\\", err)\\n        return\\n    }\\n\\n    totalSpace := stat.Blocks * uint64(stat.Bsize)\\n    freeSpace := stat.Bfree * uint64(stat.Bsize)\\n\\n    // totalSpace and freeSpace now contain the total and free disk space on the root file system\\n}\\n```\\n\\nThese are just examples, and there are many other ways to gather system resource usage data using Go.","state":"on-chain","updateAt":1681803979226,"users":["Sophia Williams"],"uuid":"7ac7aac8-e101-407f-a17b-06c493cc7537"},{"uuid":"00d174fa-093f-4608-9731-8e93b66d3169","chat":"What is the process of photosynthesis in plants? (Demonstration data)","reply":"Photosynthesis is the process by which plants, algae, and some bacteria convert light energy into chemical energy. During photosynthesis, chlorophyll-containing cells in plant leaves absorb light energy, which is then used to synthesize glucose and oxygen from carbon dioxide and water. This process occurs in two stages: the light-dependent reactions, which occur in the thylakoid membranes of chloroplasts and generate ATP and NADPH, and the light-independent reactions (or Calvin Cycle), which occur in the stroma of chloroplasts and use the ATP and NADPH to fix carbon dioxide and synthesize glucose.","state":"on-chain","users":["Emily Johnson"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16187929.jpeg"],"createAt":1681804140721,"updateAt":1681804140721},{"uuid":"5da90237-c1b4-442b-a5be-681c9bfdb652","chat":"How do cryptocurrencies work, and what is blockchain technology? (Demonstration data)","reply":"Cryptocurrencies are digital or virtual tokens that use cryptography to secure and verify transactions and control the creation of new units. They are typically decentralized, meaning they operate without a central authority such as a government or financial institution.\\n\\nBlockchain technology is the underlying technology that enables cryptocurrencies to function. It is a distributed ledger system that records and stores transactions in blocks, which are linked together in a chronological chain. Each block contains a unique cryptographic code, called a hash, which verifies the integrity of the block\'s data and ensures that it cannot be tampered with. This makes blockchain an extremely secure and transparent way to store and transmit data.","state":"on-chain","users":["Sophia Williams"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16196205.jpeg"],"createAt":1681804168083,"updateAt":1681804168083},{"uuid":"c7471be8-9e2a-43b3-8730-bc601d4c7c1f","chat":"What are some tips for improving mental health and reducing stress? (Demonstration data)","reply":"1. Regular exercise\\n2. Practice meditation or mindfulness\\n3. Get enough sleep\\n4. Connect with friends and family\\n5. Take breaks and prioritize self-care\\n6. Seek professional help if needed\\n7. Limit exposure to negative news or social media\\n8. Maintain a healthy diet\\n9. Engage in hobbies or activities you enjoy\\n10. Set realistic goals and prioritize tasks.","state":"on-chain","users":["Sophia Williams"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16196205.jpeg"],"createAt":1681804181955,"updateAt":1681804181955},{"uuid":"92627ab7-0280-4079-bab2-a95541f5353b","chat":"Can you explain the basics of quantum mechanics? (Demonstration data)","reply":"Quantum mechanics is a branch of physics that describes the behavior of matter and energy at extremely small scales, such as atoms and subatomic particles. It is based on the concept of wave-particle duality, which means that all particles have both wave-like and particle-like properties.\\n\\nThe basic principles of quantum mechanics include:\\n\\n1. Superposition: Particles can be in multiple states or locations at the same time until they are observed or measured.\\n\\n2. Uncertainty principle: It is impossible to know both the exact position and momentum of a particle simultaneously.\\n\\n3. Wave-particle duality: Particles can exhibit wave-like behavior, such as interference patterns, and vice versa.\\n\\n4. Quantum entanglement: When two particles become entangled, their states are linked even over long distances.\\n\\n5. Probability: The behavior of particles is described by probabilities, rather than deterministic laws.\\n\\nQuantum mechanics has many applications in modern technology, including transistors, lasers, and cryptography. However, its counterintuitive concepts and predictions have also led to many philosophical and interpretational debates in physics.","state":"on-chain","users":["Michael Smith"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16161525.jpeg"],"createAt":1681804206334,"updateAt":1681804206334},{"uuid":"5e11c80e-394d-4e26-a6fd-ca7e7685fd08","chat":"What are some popular travel destinations in Europe? (Demonstration data)","reply":"Some popular travel destinations in Europe are Paris (France), Barcelona (Spain), Rome (Italy), Amsterdam (Netherlands), London (United Kingdom), Berlin (Germany), Venice (Italy), Athens (Greece), Vienna (Austria), and Prague (Czech Republic).","state":"on-chain","users":["Michael Smith"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16161525.jpeg"],"createAt":1681804214559,"updateAt":1681804214559},{"uuid":"8a98b1e0-25c3-4ea3-b0cf-cbb73245659f","chat":"What are the basic principles of artificial intelligence and machine learning? (Demonstration data)","reply":"The basic principles of artificial intelligence include creating algorithms that can simulate human cognition and decision-making, while machine learning involves developing techniques that allow machines to learn patterns from data without being explicitly programmed. Key concepts in AI and ML include neural networks, deep learning, supervised and unsupervised learning, reinforcement learning, and natural language processing. Additionally, these fields often rely on large amounts of data and sophisticated computational infrastructure for training and inference.","state":"on-chain","users":["Sophia Williams"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16196205.jpeg"],"createAt":1681804285433,"updateAt":1681804285433},{"uuid":"45bef18e-b7a5-4436-a7ab-30547c668707","chat":"How does climate change affect global ecosystems? (Demonstration data)","reply":"Climate change can have various impacts on global ecosystems, including:\\n\\n1. Changes in temperature and precipitation patterns can affect the distribution and abundance of species, leading to local extinctions and changes in community composition.\\n\\n2. Melting glaciers and ice sheets can lead to rising sea levels, which can inundate coastal habitats and disrupt marine ecosystems.\\n\\n3. Changes in ocean temperatures and chemistry can affect marine organisms and disrupt food webs.\\n\\n4. Increased frequency and severity of heatwaves, droughts, wildfires, storms, and floods can cause direct damage to ecosystems and their inhabitants.\\n\\n5. Climate change can also exacerbate other stressors, such as habitat destruction, pollution, overfishing, and invasive species, making it more difficult for ecosystems to adapt and recover.\\n\\nOverall, climate change is a major threat to biodiversity and ecosystem functioning, and urgent action is needed to reduce greenhouse gas emissions and protect vulnerable ecosystems.","state":"on-chain","users":["Sophia Williams"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16196205.jpeg"],"createAt":1681804304409,"updateAt":1681804304409},{"uuid":"a51b02d3-4b72-4084-ad66-65881ab8c5b9","chat":"How to develop effective time management strategies? (Demonstration data)","reply":"Here are some tips for developing effective time management strategies:\\n\\n1. Set clear goals and prioritize tasks according to their importance and urgency.\\n2. Create a schedule or to-do list that includes specific blocks of time for each task.\\n3. Eliminate distractions such as social media, email notifications, etc., during designated work times.\\n4. Take regular breaks to prevent burnout and increase productivity.\\n5. Use tools like timers and productivity apps to help you stay on track.\\n6. Learn to say \\"no\\" to requests that don\'t align with your goals or priorities.\\n7. Delegate tasks when possible to free up more time for important projects.\\n8. Regularly evaluate your progress and adjust your strategies as needed.","state":"on-chain","users":["Michael Smith"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16161525.jpeg"],"createAt":1681804325044,"updateAt":1681804325044},{"uuid":"c3c2cee8-f5ea-4ace-9a3d-a0aed8e7ee0a","chat":"What are the main ideas of Marxism? (Demonstration data)","reply":"Marxism is a social, economic, and political theory developed by Karl Marx. Its main ideas include the belief that class struggle is the driving force behind historical change, that capitalism exploits workers and leads to inequality, that a socialist revolution is necessary to overthrow capitalist systems, and that a classless society can be achieved through the establishment of communism. Marxism also emphasizes the importance of collective ownership of the means of production and the abolition of private property.","state":"on-chain","users":["Michael Smith"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16161525.jpeg"],"createAt":1681804342759,"updateAt":1681804342759},{"uuid":"8facdcb2-b677-40ba-b6eb-865d349a62ea","chat":"Why is it important to maintain biodiversity? (Demonstration data)","reply":"Maintaining biodiversity is important because it supports the functioning of ecosystems and provides a wide range of benefits to human society, including food, medicine, clean air and water, and cultural and recreational opportunities. Biodiversity also helps to ensure ecosystem resilience and adaptability in the face of environmental change, such as climate change and habitat loss. Additionally, many species have intrinsic value and ethical considerations dictate that we have a responsibility to protect them.","state":"on-chain","users":["Emily Johnson"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16187929.jpeg"],"createAt":1681804359729,"updateAt":1681804359729},{"uuid":"584d18d0-53bb-4654-bf3d-9ebbee34b2ca","chat":"What are the primary differences between renewable and non-renewable energy sources? (Demonstration data)","reply":"Renewable energy sources are naturally replenishing and can be sustainably used without being depleted, such as solar, wind, hydro, geothermal, and biomass. Non-renewable energy sources are finite and cannot be replenished within a human timescale, such as fossil fuels (coal, oil, natural gas) and nuclear energy. Additionally, renewable energy sources generally have lower carbon emissions than non-renewable sources, which contribute significantly to climate change.","state":"on-chain","users":["Emily Johnson"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16187929.jpeg"],"createAt":1681804407760,"updateAt":1681804407760},{"uuid":"b46ccc9d-0d73-402c-9211-ba3685a66333","chat":"How does meditation help in improving mental and emotional well-being? (Demonstration data)","reply":"Meditation can help improve mental and emotional well-being by reducing stress, anxiety, and depression; increasing feelings of calm and relaxation; improving focus and attention; promoting self-awareness and acceptance; and enhancing overall emotional resilience and cognitive flexibility.","state":"on-chain","users":["Emily Johnson"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16187929.jpeg"],"createAt":1681804418041,"updateAt":1681804418041},{"uuid":"36243888-ffe3-4519-920a-3e152ad39017","chat":"What are some key aspects to consider when starting a new business? (Demonstration data)","reply":"Here are some key aspects to consider when starting a new business:\\n\\n1. Market research and analysis\\n2. Business plan creation\\n3. Funding and financial planning\\n4. Legal structure and regulatory requirements\\n5. Branding and marketing strategy\\n6. Hiring and team building\\n7. Operational logistics and infrastructure\\n8. Risk management and contingency planning \\n\\nIt\'s important to thoroughly research and consider all of these aspects before starting a new business to increase the chances of success.","state":"off-chain","users":["Emily Johnson"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16187929.jpeg"],"createAt":1681804452946,"updateAt":1681804452946},{"uuid":"d9bdee62-e8a0-4611-bdc9-2e42cc6bc224","chat":"Can you explain the theory of relativity, and how it has impacted our understanding of the universe? (Demonstration data)","reply":"The theory of relativity, developed by Albert Einstein, is a set of two interrelated theories: special relativity and general relativity. \\n\\nSpecial relativity deals with the laws of physics in unaccelerated (inertial) reference frames, and it introduced the concept that the speed of light is constant for all observers, regardless of their relative motion. This means that time and space are not absolute but are dependent on the observer\'s reference frame. Special relativity also showed that mass and energy are equivalent, as described by the famous equation E=mc².\\n\\nGeneral relativity extends special relativity to include gravity, describing gravity as a curvature of spacetime caused by the presence of matter and energy. This theory has been confirmed by numerous experiments and observations, including the bending of starlight during a solar eclipse and the detection of gravitational waves.\\n\\nThe theory of relativity has had a profound impact on our understanding of the universe, revolutionizing our understanding of space, time, gravity, and the nature of the cosmos. It has led to new concepts like spacetime, black holes, and the expanding universe, and has played a crucial role in the development of modern cosmology and astrophysics.","state":"off-chain","users":["Emily Johnson"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16187929.jpeg"],"createAt":1681804478295,"updateAt":1681804478295},{"uuid":"a39469e7-cc8e-4010-8e5e-c37cfee35d38","chat":"What are some effective methods for learning a new language? (Demonstration data)","reply":"1. Start with the basics: Learn the basic grammar rules, vocabulary, and sentence structure.\\n\\n2. Immerse yourself in the language: Read books, watch TV shows/movies, and listen to music in the target language.\\n\\n3. Practice speaking: Find a language partner or join a language exchange program to practice your speaking skills.\\n\\n4. Use language learning apps: Various apps offer fun exercises, quizzes, and games to improve language proficiency.\\n\\n5. Take a language course: Enroll in a language class or hire a private tutor to receive structured learning with feedback.\\n\\n6. Visit a country where the language is spoken: Immersion in the culture can help one learn about the language and acquire new vocabulary naturally.\\n\\n7. Persist and be patient: Learning a new language takes time and consistent effort, so stay motivated and enjoy the process of progress.","state":"off-chain","users":["Emily Johnson"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16187929.jpeg"],"createAt":1681804580000,"updateAt":1681804580000},{"uuid":"d79aea5d-c987-48f5-9c7c-18d72ac72ab4","chat":"What are the ethical considerations regarding human gene editing technology? (Demonstration data)","reply":"Human gene editing technology raises a variety of ethical considerations, including the potential for unintended consequences and unforeseen risks to individuals and society, issues of equity and access, concerns about eugenics and discrimination, and questions about the appropriate role of science in shaping human biology. Additionally, there are ongoing debates about the ethical use of this technology in research and medical applications, as well as concerns about informed consent, privacy, and transparency.","state":"off-chain","users":["Michael Smith"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16161525.jpeg"],"createAt":1681804620723,"updateAt":1681804620723},{"uuid":"e6314280-fb37-4a7d-8a5d-ab96a051e6b0","chat":"How important is cybersecurity in today\'s society? (Demonstration data)","reply":"Cybersecurity is extremely important in today\'s society. With the increasing reliance on technology and the internet, the risk of cyber attacks has also increased. Cybersecurity helps protect individuals, organizations, and governments from unauthorized access to sensitive information, data breaches, and other malicious activities that can result in financial losses, reputational damage, and even physical harm.","state":"off-chain","users":["Michael Smith"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16161525.jpeg"],"createAt":1681804636910,"updateAt":1681804636910},{"uuid":"b06d523e-19ad-457e-88a7-7851a54c90df","chat":"What does \\"growth mindset\\" mean in psychology? (Demonstration data)","reply":"\\"Growth mindset\\" is a term coined by psychologist Carol Dweck to describe the belief that one\'s abilities and intelligence can be developed through hard work, persistence, and learning from failure. It contrasts with a \\"fixed mindset,\\" which is the belief that one\'s abilities are largely innate and cannot be changed much. Research suggests that individuals with a growth mindset tend to be more resilient, motivated, and successful in achieving their goals.","state":"off-chain","users":["Michael Smith"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16161525.jpeg"],"createAt":1681804648069,"updateAt":1681804648069},{"uuid":"31c0f02b-7eb5-48cb-9003-27d9ab66b58a","chat":"How does space exploration drive advancements in science and technology? (Demonstration data)","reply":"Space exploration drives advancements in science and technology in several ways. It has led to the development of new materials, propulsion systems, and communication technologies. Space exploration has also resulted in improved medical and environmental monitoring technologies, as well as advances in robotics and artificial intelligence. Additionally, space missions have allowed scientists to study the universe beyond Earth, leading to new discoveries and a deeper understanding of our place in the cosmos.","state":"off-chain","users":["Sophia Williams"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16196205.jpeg"],"createAt":1681804669963,"updateAt":1681804669963},{"uuid":"8da1d8f5-35e8-4f68-a609-ee7d7ebf472f","chat":"What impact does maintaining good interpersonal relationships have on personal and professional success? (Demonstration data)","reply":"Maintaining good interpersonal relationships can have a significant impact on both personal and professional success. It helps in building trust, communication, collaboration, and mutual respect, leading to better teamwork, higher productivity, job satisfaction, career advancement, and overall well-being. Good interpersonal relationships can also provide emotional support, reduce stress, and increase resilience in challenging situations, contributing to personal growth and happiness.","state":"off-chain","users":["Sophia Williams"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16196205.jpeg"],"createAt":1681804679835,"updateAt":1681804679835},{"uuid":"d53e09ad-aa9a-4e96-bbf5-9123b4c6dc47","chat":"What is a circular economy, and how does it contribute to sustainable development? (Demonstration data)","reply":"A circular economy is an economic system that aims to minimize waste and promote the continual use of resources by designing out waste and pollution, keeping products and materials in use, and regenerating natural systems. It contributes to sustainable development by reducing resource depletion, reducing environmental pollution, promoting economic growth, creating jobs, and improving social well-being. In a circular economy, products and materials are reused, repaired, or recycled, which reduces the need for virgin resources and energy-intensive production processes. This results in lower greenhouse gas emissions, reduced water consumption, and improved resource efficiency, which all contribute to a more sustainable future.","state":"off-chain","users":["Sophia Williams"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16196205.jpeg"],"createAt":1681804712180,"updateAt":1681804712180}]';

const initOnChainChatString =
  '[{"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16187929.jpeg"],"chat":"What is Fermat\'s Last Theorem? (Demonstration data)","createAt":1681803979226,"reply":"Fermat\'s Last Theorem, proposed by Pierre de Fermat in 1637, states that no three positive integers a, b, and c satisfy the equation an + bn = cn for any integer value of n greater than 2. This theorem was famously proved by Andrew Wiles in 1994, after more than 350 years of effort by mathematicians to solve it.","state":"on-chain","updateAt":1681803979226,"users":["Emily Johnson"],"uuid":"0298c58f-7e1c-401a-8f8f-b6c785d779c9"},{"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16161525.jpeg"],"chat":"What is the largest star in the universe? (Demonstration data)","createAt":1681803979226,"reply":"The largest star currently known is UY Scuti, which has a radius around 1,700 times larger than the Sun. However, there may be even larger stars that have not been discovered yet.","state":"on-chain","updateAt":1681803979226,"users":["Michael Smith"],"uuid":"c44bff6c-8dcb-40be-b73f-b14b72d7ce47"},{"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16196205.jpeg"],"chat":"Can you use Go to write a code that collects CPU and memory? (Demonstration data)","createAt":1681803979226,"reply":"Yes, it\'s possible to use Go language to collect CPU and memory usage of a program or system.\\n\\nGo provides standard library packages such as \\"runtime\\" and \\"os\\" which can be used to gather information about system resources such as CPU usage, memory usage, and more.\\n\\nFor example, you can use the \\"runtime\\" package to get information about the current Go process:\\n\\n```go\\nimport \\"runtime\\"\\n\\nfunc main() {\\n    memStats := &runtime.MemStats{}\\n    runtime.ReadMemStats(memStats)\\n    // memStats now contains the memory usage statistics for the current process\\n}\\n```\\n\\nSimilarly, you can use the \\"os\\" package to get information about the overall system:\\n\\n```go\\nimport (\\n    \\"fmt\\"\\n    \\"os\\"\\n)\\n\\nfunc main() {\\n    stat := &syscall.Statfs_t{}\\n\\n    err := syscall.Statfs(\\"/\\", stat)\\n    if err != nil {\\n        fmt.Println(\\"Error getting file system stats:\\", err)\\n        return\\n    }\\n\\n    totalSpace := stat.Blocks * uint64(stat.Bsize)\\n    freeSpace := stat.Bfree * uint64(stat.Bsize)\\n\\n    // totalSpace and freeSpace now contain the total and free disk space on the root file system\\n}\\n```\\n\\nThese are just examples, and there are many other ways to gather system resource usage data using Go.","state":"on-chain","updateAt":1681803979226,"users":["Sophia Williams"],"uuid":"7ac7aac8-e101-407f-a17b-06c493cc7537"},{"uuid":"00d174fa-093f-4608-9731-8e93b66d3169","chat":"What is the process of photosynthesis in plants? (Demonstration data)","reply":"Photosynthesis is the process by which plants, algae, and some bacteria convert light energy into chemical energy. During photosynthesis, chlorophyll-containing cells in plant leaves absorb light energy, which is then used to synthesize glucose and oxygen from carbon dioxide and water. This process occurs in two stages: the light-dependent reactions, which occur in the thylakoid membranes of chloroplasts and generate ATP and NADPH, and the light-independent reactions (or Calvin Cycle), which occur in the stroma of chloroplasts and use the ATP and NADPH to fix carbon dioxide and synthesize glucose.","state":"on-chain","users":["Emily Johnson"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16187929.jpeg"],"createAt":1681804140721,"updateAt":1681804140721},{"uuid":"5da90237-c1b4-442b-a5be-681c9bfdb652","chat":"How do cryptocurrencies work, and what is blockchain technology? (Demonstration data)","reply":"Cryptocurrencies are digital or virtual tokens that use cryptography to secure and verify transactions and control the creation of new units. They are typically decentralized, meaning they operate without a central authority such as a government or financial institution.\\n\\nBlockchain technology is the underlying technology that enables cryptocurrencies to function. It is a distributed ledger system that records and stores transactions in blocks, which are linked together in a chronological chain. Each block contains a unique cryptographic code, called a hash, which verifies the integrity of the block\'s data and ensures that it cannot be tampered with. This makes blockchain an extremely secure and transparent way to store and transmit data.","state":"on-chain","users":["Sophia Williams"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16196205.jpeg"],"createAt":1681804168083,"updateAt":1681804168083},{"uuid":"c7471be8-9e2a-43b3-8730-bc601d4c7c1f","chat":"What are some tips for improving mental health and reducing stress? (Demonstration data)","reply":"1. Regular exercise\\n2. Practice meditation or mindfulness\\n3. Get enough sleep\\n4. Connect with friends and family\\n5. Take breaks and prioritize self-care\\n6. Seek professional help if needed\\n7. Limit exposure to negative news or social media\\n8. Maintain a healthy diet\\n9. Engage in hobbies or activities you enjoy\\n10. Set realistic goals and prioritize tasks.","state":"on-chain","users":["Sophia Williams"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16196205.jpeg"],"createAt":1681804181955,"updateAt":1681804181955},{"uuid":"92627ab7-0280-4079-bab2-a95541f5353b","chat":"Can you explain the basics of quantum mechanics? (Demonstration data)","reply":"Quantum mechanics is a branch of physics that describes the behavior of matter and energy at extremely small scales, such as atoms and subatomic particles. It is based on the concept of wave-particle duality, which means that all particles have both wave-like and particle-like properties.\\n\\nThe basic principles of quantum mechanics include:\\n\\n1. Superposition: Particles can be in multiple states or locations at the same time until they are observed or measured.\\n\\n2. Uncertainty principle: It is impossible to know both the exact position and momentum of a particle simultaneously.\\n\\n3. Wave-particle duality: Particles can exhibit wave-like behavior, such as interference patterns, and vice versa.\\n\\n4. Quantum entanglement: When two particles become entangled, their states are linked even over long distances.\\n\\n5. Probability: The behavior of particles is described by probabilities, rather than deterministic laws.\\n\\nQuantum mechanics has many applications in modern technology, including transistors, lasers, and cryptography. However, its counterintuitive concepts and predictions have also led to many philosophical and interpretational debates in physics.","state":"on-chain","users":["Michael Smith"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16161525.jpeg"],"createAt":1681804206334,"updateAt":1681804206334},{"uuid":"5e11c80e-394d-4e26-a6fd-ca7e7685fd08","chat":"What are some popular travel destinations in Europe? (Demonstration data)","reply":"Some popular travel destinations in Europe are Paris (France), Barcelona (Spain), Rome (Italy), Amsterdam (Netherlands), London (United Kingdom), Berlin (Germany), Venice (Italy), Athens (Greece), Vienna (Austria), and Prague (Czech Republic).","state":"on-chain","users":["Michael Smith"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16161525.jpeg"],"createAt":1681804214559,"updateAt":1681804214559},{"uuid":"8a98b1e0-25c3-4ea3-b0cf-cbb73245659f","chat":"What are the basic principles of artificial intelligence and machine learning? (Demonstration data)","reply":"The basic principles of artificial intelligence include creating algorithms that can simulate human cognition and decision-making, while machine learning involves developing techniques that allow machines to learn patterns from data without being explicitly programmed. Key concepts in AI and ML include neural networks, deep learning, supervised and unsupervised learning, reinforcement learning, and natural language processing. Additionally, these fields often rely on large amounts of data and sophisticated computational infrastructure for training and inference.","state":"on-chain","users":["Sophia Williams"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16196205.jpeg"],"createAt":1681804285433,"updateAt":1681804285433},{"uuid":"45bef18e-b7a5-4436-a7ab-30547c668707","chat":"How does climate change affect global ecosystems? (Demonstration data)","reply":"Climate change can have various impacts on global ecosystems, including:\\n\\n1. Changes in temperature and precipitation patterns can affect the distribution and abundance of species, leading to local extinctions and changes in community composition.\\n\\n2. Melting glaciers and ice sheets can lead to rising sea levels, which can inundate coastal habitats and disrupt marine ecosystems.\\n\\n3. Changes in ocean temperatures and chemistry can affect marine organisms and disrupt food webs.\\n\\n4. Increased frequency and severity of heatwaves, droughts, wildfires, storms, and floods can cause direct damage to ecosystems and their inhabitants.\\n\\n5. Climate change can also exacerbate other stressors, such as habitat destruction, pollution, overfishing, and invasive species, making it more difficult for ecosystems to adapt and recover.\\n\\nOverall, climate change is a major threat to biodiversity and ecosystem functioning, and urgent action is needed to reduce greenhouse gas emissions and protect vulnerable ecosystems.","state":"on-chain","users":["Sophia Williams"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16196205.jpeg"],"createAt":1681804304409,"updateAt":1681804304409},{"uuid":"a51b02d3-4b72-4084-ad66-65881ab8c5b9","chat":"How to develop effective time management strategies? (Demonstration data)","reply":"Here are some tips for developing effective time management strategies:\\n\\n1. Set clear goals and prioritize tasks according to their importance and urgency.\\n2. Create a schedule or to-do list that includes specific blocks of time for each task.\\n3. Eliminate distractions such as social media, email notifications, etc., during designated work times.\\n4. Take regular breaks to prevent burnout and increase productivity.\\n5. Use tools like timers and productivity apps to help you stay on track.\\n6. Learn to say \\"no\\" to requests that don\'t align with your goals or priorities.\\n7. Delegate tasks when possible to free up more time for important projects.\\n8. Regularly evaluate your progress and adjust your strategies as needed.","state":"on-chain","users":["Michael Smith"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16161525.jpeg"],"createAt":1681804325044,"updateAt":1681804325044},{"uuid":"c3c2cee8-f5ea-4ace-9a3d-a0aed8e7ee0a","chat":"What are the main ideas of Marxism? (Demonstration data)","reply":"Marxism is a social, economic, and political theory developed by Karl Marx. Its main ideas include the belief that class struggle is the driving force behind historical change, that capitalism exploits workers and leads to inequality, that a socialist revolution is necessary to overthrow capitalist systems, and that a classless society can be achieved through the establishment of communism. Marxism also emphasizes the importance of collective ownership of the means of production and the abolition of private property.","state":"on-chain","users":["Michael Smith"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16161525.jpeg"],"createAt":1681804342759,"updateAt":1681804342759},{"uuid":"8facdcb2-b677-40ba-b6eb-865d349a62ea","chat":"Why is it important to maintain biodiversity? (Demonstration data)","reply":"Maintaining biodiversity is important because it supports the functioning of ecosystems and provides a wide range of benefits to human society, including food, medicine, clean air and water, and cultural and recreational opportunities. Biodiversity also helps to ensure ecosystem resilience and adaptability in the face of environmental change, such as climate change and habitat loss. Additionally, many species have intrinsic value and ethical considerations dictate that we have a responsibility to protect them.","state":"on-chain","users":["Emily Johnson"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16187929.jpeg"],"createAt":1681804359729,"updateAt":1681804359729},{"uuid":"584d18d0-53bb-4654-bf3d-9ebbee34b2ca","chat":"What are the primary differences between renewable and non-renewable energy sources? (Demonstration data)","reply":"Renewable energy sources are naturally replenishing and can be sustainably used without being depleted, such as solar, wind, hydro, geothermal, and biomass. Non-renewable energy sources are finite and cannot be replenished within a human timescale, such as fossil fuels (coal, oil, natural gas) and nuclear energy. Additionally, renewable energy sources generally have lower carbon emissions than non-renewable sources, which contribute significantly to climate change.","state":"on-chain","users":["Emily Johnson"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16187929.jpeg"],"createAt":1681804407760,"updateAt":1681804407760},{"uuid":"b46ccc9d-0d73-402c-9211-ba3685a66333","chat":"How does meditation help in improving mental and emotional well-being? (Demonstration data)","reply":"Meditation can help improve mental and emotional well-being by reducing stress, anxiety, and depression; increasing feelings of calm and relaxation; improving focus and attention; promoting self-awareness and acceptance; and enhancing overall emotional resilience and cognitive flexibility.","state":"on-chain","users":["Emily Johnson"],"demo":true,"avatarSrc":["@/assets/avatar/pexels-photo-16187929.jpeg"],"createAt":1681804418041,"updateAt":1681804418041}]';

export { initChatString, initOnChainChatString };