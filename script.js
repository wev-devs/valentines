function selectFlower(flowerName) {
    document.getElementById('flower-name').innerText = flowerName;
    document.getElementById('selected-flower').style.display = 'block';
    
    const letters = {
        'Roses': "My Dearest,\n\nRoses are red, violets are blue,\nEach petal reminds me of my love for you.\nIn a garden of life, you’re my favorite bloom,\nWith you by my side, there’s always room.\n\nYour laughter is sweet, your smile is bright,\nYou fill my days with pure delight.\nTogether we grow, through every season,\nIn your embrace, I find my reason.\n\nHappy Valentine’s Day, my heart’s true desire,\nWith you, my love, I’ll always aspire.\nMay our love blossom, forever entwined,\nIn this beautiful journey, you’re one of a kind.\n\nWith all my love,\nEd",
        'Tulips': "To my sweetest,\n\nTulips are bright, in colors so true,\nEach bloom reminds me of my love for you.\nIn the garden of life, you’re my sweetest delight,\nWith you by my side, everything feels right.\n\nYour laughter is music, your smile is the sun,\nWith every moment, my heart has won.\nTogether we flourish, through every season,\nIn your warm embrace, I find my reason.\n\nHappy Valentine’s Day, my heart’s gentle grace,\nWith you, my love, I’ve found my place.\nMay our love blossom, like tulips in spring,\nIn this beautiful journey, you’re my everything.\n\nWith all my love,\nEd",
        'Lilies': "Dearest you,\n\nLilies are pure, with beauty so rare,\nEach petal whispers how much I care.\nIn the garden of life, you’re my shining star,\nWith you by my side, I know we’ll go far.\n\nYour laughter is music, your touch is divine,\nIn your warm embrace, I feel so aligned.\nTogether we blossom, through every season,\nIn your love, I find my greatest reason.\n\nHappy Valentine’s Day, my heart’s gentle light,\nWith you, my love, everything feels right.\nMay our love flourish, like lilies in bloom,\nIn this beautiful journey, you’re my heart’s room.\n\nWith all my love,\nEd"
    };

    document.getElementById('flower-letter').innerText = letters[flowerName];
    document.getElementById('flower-letter').style.display = 'block';
}