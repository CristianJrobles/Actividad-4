const biomes = [
    {
        icon: '🏔️',
        name: 'Tundra',
        description: 'La tundra es un desierto polar con poca o ninguna presencia de árboles grandes. Tiene vegetación dispersa como arbustos enanos y dentro de las extensiones de hielo pueden existir formas vegetales que datan de hace siglos.',
        question: '¿Qué caracteriza principalmente a la vegetación de la tundra?',
        options: [
            'Grandes árboles tropicales',
            'Arbustos enanos y vegetación dispersa',
            'Cactus y plantas desérticas',
            'Árboles de hoja perenne'
        ],
        correct: 1,
        explanation: '¡Exacto! La tundra se caracteriza por tener arbustos enanos y vegetación dispersa. Las precipitaciones caen en forma de nieve durante el invierno.',
        funFact: 'En la tundra, dentro de las grandes extensiones de hielo polar pueden existir formas vegetales que datan de hace siglos y que cuentan la historia del planeta.'
    },
    {
        icon: '🌲',
        name: 'Taiga',
        description: 'La taiga es un bioma donde el suelo es pobre en nutrientes debido a la presencia del permafrost (porción de suelo permanentemente congelado). Este factor determina qué tipo de vegetación puede crecer.',
        question: '¿Qué tipo de árboles son más comunes en la taiga?',
        options: [
            'Robles y alcornoques',
            'Palmeras',
            'Coníferas (pinos)',
            'Ceibas y caobas'
        ],
        correct: 2,
        explanation: '¡Correcto! La taiga se caracteriza por la presencia mayoritaria de coníferas, conocidas como pinos. También abundan los líquenes y los musgos.',
        funFact: 'El permafrost es una porción de suelo permanentemente congelado que hace que el suelo de la taiga sea pobre en nutrientes, limitando la vegetación que puede crecer.'
    },
    {
        icon: '🍂',
        name: 'Bosques Templados',
        description: 'Los bosques templados pueden considerarse bosques otoñales eternos, ya que sus colores son característicos del otoño. Tienen capas vegetales bien definidas con árboles maduros, arbustos y plantas herbáceas.',
        question: '¿Qué característica define a los bosques templados?',
        options: [
            'Colores característicos del otoño',
            'Temperaturas extremadamente altas',
            'Ausencia total de lluvias',
            'Solo tienen cactus'
        ],
        correct: 0,
        explanation: '¡Muy bien! Los bosques templados son como bosques otoñales eternos con colores característicos. Es común encontrar árboles grandes como el roble, y la temperatura y precipitaciones varían durante el año.',
        funFact: 'En los bosques templados encontramos capas vegetales bien definidas: árboles maduros en la parte alta, arbustos en la media y plantas herbáceas en el suelo.'
    },
    {
        icon: '🌳',
        name: 'Bosques Mediterráneos',
        description: 'Los bosques mediterráneos están compuestos de árboles de hoja perenne muy resistentes a las sequías, como los robles y alcornoques. Su clima es moderado, con precipitaciones en primavera e invierno.',
        question: '¿Qué característica especial tienen los árboles del bosque mediterráneo?',
        options: [
            'Son de hoja caduca',
            'Son resistentes a las sequías',
            'Solo crecen en invierno',
            'Necesitan mucha agua constantemente'
        ],
        correct: 1,
        explanation: '¡Perfecto! Los árboles del bosque mediterráneo son de hoja perenne y muy resistentes a las sequías. Este bioma permite gran variedad de vida que evita las migraciones gracias a su clima favorable.',
        funFact: 'El bosque mediterráneo está ubicado alrededor del mar Mediterráneo en Europa, en California (América del Norte), y en algunas zonas de Asia.'
    },
    {
        icon: '🌴',
        name: 'Selva Tropical',
        description: 'La selva tropical es suculenta y calurosa todo el año. Las temperaturas no varían entre día y noche, y las lluvias son frecuentes. Estos bosques presentan la mayor biodiversidad de plantas y animales del planeta.',
        question: '¿Qué característica destaca a la selva tropical?',
        options: [
            'Es el bioma con menor biodiversidad',
            'Tiene la mayor biodiversidad del planeta',
            'No llueve nunca',
            'Es muy fría todo el año'
        ],
        correct: 1,
        explanation: '¡Excelente! La selva tropical presenta la mayor biodiversidad tanto en plantas como en animales. Podemos encontrar desde árboles de gran tamaño hasta helechos y hermosas flores como las orquídeas.',
        funFact: 'En la selva tropical las temperaturas no varían durante el día y la noche, manteniéndose calurosas y húmedas constantemente.'
    },
    {
        icon: '🦒',
        name: 'Sabanas y Praderas',
        description: 'Las sabanas y praderas tienen estaciones secas y húmedas bien marcadas. Durante la estación húmeda con abundantes precipitaciones, las plantas crecen formando una capa vegetal importante para la vida animal diversa.',
        question: '¿Qué caracteriza a las estaciones en las sabanas?',
        options: [
            'No tienen estaciones definidas',
            'Estaciones secas y húmedas bien marcadas',
            'Solo tienen invierno',
            'Llueve todo el año igual'
        ],
        correct: 1,
        explanation: '¡Correcto! Las sabanas y praderas se caracterizan por tener estaciones secas y húmedas bien marcadas. Este bioma se encuentra en casi todos los continentes y son conocidos por ser inundables.',
        funFact: 'Las sabanas y praderas son inundables, lo cual hace que las especies vegetales y animales tengan adaptaciones hidrológicas únicas y particulares.'
    },
    {
        icon: '🏜️',
        name: 'Desiertos',
        description: 'Los desiertos tienen precipitaciones anuales escasas. La evaporación es mayor que las precipitaciones. Hay desiertos calurosos todo el año como El Sahara y otros fríos en invierno como El Gobi.',
        question: '¿Cómo están adaptadas las plantas del desierto?',
        options: [
            'Necesitan mucha agua constantemente',
            'Están adaptadas para perder el mínimo de agua',
            'No pueden sobrevivir sin lluvia diaria',
            'Solo crecen bajo el agua'
        ],
        correct: 1,
        explanation: '¡Muy bien! Las plantas del desierto están adaptadas para perder el mínimo de agua, como los cactus. La vegetación se caracteriza por ser leñosa (grandes tallos).',
        funFact: 'En los desiertos, la evaporación del agua es incluso mayor que las precipitaciones. Las temperaturas pueden ser muy variadas, desde muy calurosas hasta muy frías.'
    },
    {
        icon: '🌊',
        name: 'Biomas Acuáticos',
        description: 'Los biomas acuáticos abarcan el mayor porcentaje de superficie del planeta. Incluyen océanos, mares, lagos y ríos. Los océanos son tan extensos que presentan una biodiversidad que aún desconocemos casi por completo.',
        question: '¿Qué determina las especies en los biomas acuáticos?',
        options: [
            'Solo la temperatura',
            'La penetración de la luz solar',
            'El color del agua',
            'La cantidad de peces'
        ],
        correct: 1,
        explanation: '¡Perfecto! Las especies en los biomas acuáticos son determinadas por la penetración de la luz solar, que condiciona la fotosíntesis en las plantas y el desarrollo de los animales.',
        funFact: 'Los biomas acuáticos abarcan el mayor porcentaje de superficie del planeta. Los océanos son tan grandes que al día de hoy desconocemos casi por completo su biodiversidad.'
    }
];

let currentBiome = 0;
let score = 0;
let correctAnswers = 0;

function loadBiome() {
    const biome = biomes[currentBiome];
    
    document.getElementById('biomeIcon').textContent = biome.icon;
    document.getElementById('biomeName').textContent = biome.name;
    document.getElementById('biomeDescription').textContent = biome.description;
    document.getElementById('questionText').textContent = biome.question;
    document.getElementById('funFact').innerHTML = `<strong>🔍 Dato Curioso:</strong> ${biome.funFact}`;
    
    document.getElementById('current').textContent = currentBiome + 1;
    
    const optionsGrid = document.getElementById('optionsGrid');
    optionsGrid.innerHTML = '';
    
    biome.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index);
        optionsGrid.appendChild(btn);
    });

    document.getElementById('feedbackBox').classList.remove('show', 'correct', 'incorrect');
    document.getElementById('nextBtn').classList.remove('show');
    
    updateProgress();
    updateBiomeCardColor();
}

function updateBiomeCardColor() {
    const colors = [
        'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
        'linear-gradient(135deg, #0ba360 0%, #3cba92 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    ];
    document.getElementById('biomeCard').style.background = colors[currentBiome];
}

function checkAnswer(selected) {
    const biome = biomes[currentBiome];
    const buttons = document.querySelectorAll('.option-btn');
    const feedbackBox = document.getElementById('feedbackBox');
    const feedbackIcon = document.getElementById('feedbackIcon');
    const feedbackText = document.getElementById('feedbackText');
    
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === biome.correct) {
            btn.classList.add('show-correct');
        }
        if (index === selected && selected !== biome.correct) {
            btn.classList.add('incorrect');
        }
        if (index === selected && selected === biome.correct) {
            btn.classList.add('correct');
        }
    });

    if (selected === biome.correct) {
        score += 10;
        correctAnswers++;
        feedbackIcon.textContent = '✅';
        feedbackText.textContent = biome.explanation;
        feedbackBox.classList.add('correct');
    } else {
        feedbackIcon.textContent = '❌';
        feedbackText.textContent = 'Incorrecto. ' + biome.explanation;
        feedbackBox.classList.add('incorrect');
    }

    feedbackBox.classList.add('show');
    document.getElementById('score').textContent = score;
    document.getElementById('correct').textContent = correctAnswers;
    document.getElementById('nextBtn').classList.add('show');
}

function nextBiome() {
    currentBiome++;
    if (currentBiome < biomes.length) {
        loadBiome();
    } else {
        showFinalScreen();
    }
}

function updateProgress() {
    const progress = ((currentBiome + 1) / biomes.length) * 100;
    const progressFill = document.getElementById('progressFill');
    progressFill.style.width = progress + '%';
    progressFill.textContent = Math.round(progress) + '%';
}

function showFinalScreen() {
    document.getElementById('questionArea').style.display = 'none';
    document.getElementById('finalScreen').classList.add('show');
    document.getElementById('finalScore').textContent = score;
    document.getElementById('finalCorrect').textContent = correctAnswers;
    
    const badge = document.getElementById('badge');
    if (correctAnswers === 8) {
        badge.textContent = '🏆 Explorador Maestro';
    } else if (correctAnswers >= 6) {
        badge.textContent = '🌟 Explorador Experto';
    } else if (correctAnswers >= 4) {
        badge.textContent = '⭐ Explorador en Entrenamiento';
    } else {
        badge.textContent = '🌱 Explorador Principiante';
    }
}

function restartGame() {
    currentBiome = 0;
    score = 0;
    correctAnswers = 0;
    document.getElementById('score').textContent = 0;
    document.getElementById('correct').textContent = 0;
    document.getElementById('questionArea').style.display = 'block';
    document.getElementById('finalScreen').classList.remove('show');
    loadBiome();
}

loadBiome();