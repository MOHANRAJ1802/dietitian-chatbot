function getBotResponse(input) {
    if(input == "hello") {
        return "Hello !,How can i help you";
    }
    else if(input == "hi"){
        return "Hi !,How can i help you";
    }
    else if(input == "bye"){
        return "Thank you";
    }
    else if(input == "i want diet plan"){
        return "Enter your BMI value"
    }
    else if(input == "i dont know")
    {
        return "In Home page there is an BMI Tracker. Go and check your BMI"
    }
    else if(input < 18.5)
    {
        return "your are under weight.you want to maintain or gain weight?"
    }
    else if(input == "want to maintain diet")
    {
      return "Here is a simple plan you can: Day 1:Breakfast: Oatmeal with fruits (such as berries or bananas) and a handful of nuts.Lunch: Grilled chicken salad with mixed greens, tomatoes, cucumbers, and a vinaigrette dressing.Dinner: Baked salmon with steamed vegetables (broccoli, carrots, and bell peppers) and quinoa. Day 2:Breakfast: Greek yogurt with honey and granola.      Lunch: Turkey and avocado wrap with whole grain tortilla, lettuce, and tomato.Dinner: Stir-fried tofu with mixed vegetables (snap peas, bell peppers, and mushrooms) served over brown rice.Day 3:Breakfast: Scrambled eggs with spinach, tomatoes, and whole wheat toast.Lunch: Lentil soup with a side of whole grain bread.Dinner: Grilled shrimp skewers with roasted sweet potatoes and asparagus.Day 4:Breakfast: Smoothie made with spinach, banana, almond milk, and protein powder.Lunch: Quinoa salad with chickpeas, diced vegetables, and a lemon-tahini dressing.Dinner: Baked chicken breast with steamed broccoli and couscous.Day 5:Breakfast: Whole grain toast with mashed avocado and sliced tomatoes.Lunch: Spinach and feta stuffed bell peppers with a side of mixed greens.Dinner: Turkey meatballs with marinara sauce served over zucchini noodles.Day 6:Breakfast: Cottage cheese with sliced peaches and a sprinkle of cinnamon.Lunch: Veggie burger on a whole grain bun with lettuce, tomato, and mustard.Dinner: Baked cod with roasted Brussels sprouts and quinoa.Day 7:Breakfast: Whole grain pancakes topped with Greek yogurt and mixed berries.Lunch: Whole wheat pasta with marinara sauce, grilled vegetables, and a side salad.Dinner: Grilled steak with roasted potatoes and green beans."
    }
    else if( input >18.5 && input < 24)
    {
        return "you can maintain your diet. your are in Normal weight"
    }
    else if(input == "want to gain weight")
    {
        return "Here is a one-week plan to help you gain weight:Day 1:Breakfast: Scrambled eggs with cheese, whole wheat toast, and a glass of whole milk.Mid-morning snack: Greek yogurt with honey and granola.Lunch: Turkey and avocado sandwich on whole grain bread with a side of mixed nuts.Afternoon snack: Peanut butter and banana smoothie made with whole milk and oats.Dinner: Baked chicken thighs with quinoa and roasted vegetables (such as sweet potatoes, carrots, and broccoli).  Day 2:Breakfast: Whole grain pancakes with maple syrup, scrambled eggs, and a glass of chocolate milk.Mid-morning snack: Cottage cheese with pineapple chunks.Lunch: Tuna salad sandwich on whole wheat bread with a side of avocado. Afternoon snack: Trail mix with nuts, dried fruits, and dark chocolate chips. Dinner: Beef stir-fry with brown rice and mixed vegetables (bell peppers, onions, and snap peas) cooked in olive oil.Day 3: Breakfast: Breakfast burrito with scrambled eggs, cheese, black beans, and salsa wrapped in a whole wheat tortilla. Mid-morning snack: Apple slices with almond butter.Lunch: Chickpea salad with olive oil dressing, served with whole grain crackers and cheese.Afternoon snack: Protein shake blended with banana, oats, peanut butter, and whole milk.Dinner: Baked salmon with quinoa pilaf and steamed broccoli.Day 4:Breakfast: Bagel with cream cheese, smoked salmon, and sliced tomato, served with a glass of orange juice.Mid-morning snack: Greek yogurt with mixed berries and a drizzle of honey.Lunch: Roast beef sandwich on whole grain bread with lettuce, tomato, and mayonnaise.Afternoon snack: Hummus with carrot and cucumber sticks.Dinner: Pork chops with mashed potatoes and green beans sautéed in butter. Day 5:Breakfast: Breakfast wrap with scrambled eggs, cheese, spinach, and salsa in a whole wheat tortilla. Mid-morning snack: Cottage cheese with sliced peaches.Lunch: Chicken Caesar salad with whole grain croutons and Caesar dressing. Afternoon snack: Trail mix with a variety of nuts, seeds, and dried fruits.Dinner: Spaghetti with meatballs, marinara sauce, and a side salad with vinaigrette dressing.Day 6: Breakfast: French toast with maple syrup, bacon, and a glass of whole milk.Mid-morning snack: Banana with almond butter.Lunch: Turkey and Swiss cheese sandwich on whole grain bread with lettuce, tomato, and mayonnaise.Afternoon snack: Protein bar with nuts and chocolate chips.Dinner: Beef tacos with refried beans, guacamole, and salsa.Day 7:Breakfast: Smoothie bowl topped with granola, sliced bananas, and shredded coconut.Mid-morning snack: Greek yogurt with mixed berries and a sprinkle of granola.Lunch: Grilled cheese sandwich on whole grain bread with tomato soup.Afternoon snack: Peanut butter and jelly sandwich on whole wheat bread. Dinner: Baked chicken thighs with wild rice pilaf and roasted vegetables"
    }
    else if(input >= 25)
    {
        return "your are obesity. You want to reduce your weight."
    }
    else if(input == "want to reduce weight")
    {
        return "Losing weight in a healthy manner involves creating a calorie deficit while still obtaining essential nutrients. Here's a one-week plan to help you lose weight:Day 1:Breakfast: Greek yogurt with sliced strawberries and a sprinkle of granola. Mid-morning snack: Carrot and cucumber sticks with hummus.Lunch: Spinach salad with grilled chicken, cherry tomatoes, cucumbers, and balsamic vinaigrette.Afternoon snack: Apple slices with almond butter.Dinner: Baked salmon with steamed broccoli and quinoa.Day 2:Breakfast: Oatmeal with sliced banana and a drizzle of honey. Mid-morning snack: Handful of mixed nuts. Lunch: Quinoa salad with mixed vegetables (bell peppers, onions, and spinach) tossed in lemon-tahini dressing.Afternoon snack: Cottage cheese with pineapple chunks.Dinner: Grilled shrimp skewers with roasted asparagus and brown rice.Day 3:Breakfast: Whole grain toast with mashed avocado and cherry tomatoes.Mid-morning snack: Greek yogurt with a handful of blueberries.Lunch: Lentil soup with a side of mixed greens salad.Afternoon snack: Sliced cucumbers with tzatziki sauce.Dinner: Stir-fried tofu with broccoli, snap peas, and bell peppers served over cauliflower rice.Day 4: Breakfast: Smoothie made with spinach, banana, almond milk, and protein powder.Mid-morning snack: Edamame beans.Lunch: Turkey and lettuce wrap with whole grain tortilla and mustard.Afternoon snack: Sliced bell peppers with hummus.Dinner: Baked chicken breast with roasted Brussels sprouts and sweet potato wedges.Day 5:Breakfast: Scrambled eggs with spinach and feta cheese, served with whole wheat toast.Mid-morning snack: Handful of almonds.Lunch: Mixed greens salad with grilled tofu, cherry tomatoes, and avocado slices. Afternoon snack: Celery sticks with peanut butter.Dinner: Baked cod with steamed green beans and quinoa.Day 6:Breakfast: Cottage cheese with sliced peaches and a sprinkle of cinnamon.Mid-morning snack: Hard-boiled egg.Lunch: Chickpea salad with diced vegetables and lemon-tahini dressing, served with whole grain crackers.Afternoon snack: Grape tomatoes with mozzarella cheese.Dinner: Grilled chicken skewers with zucchini noodles and marinara sauce. Day 7:Breakfast: Whole grain pancakes topped with Greek yogurt and mixed berries.Mid-morning snack: Air-popped popcorn.Lunch: Whole wheat wrap with turkey, lettuce, tomato, and mustard, served with a side of carrot sticks.Afternoon snack: Sliced apples with a sprinkle of cinnamon.Dinner: Baked tofu with roasted cauliflower and brown rice.Remember to drink plenty of water throughout the day to stay hydrated and keep portions moderate. Incorporate physical activity into your routine, such as walking, jogging, or yoga, to support your weight loss goals. Consult with a healthcare professional or a dietitian for personalized advice and guidance."
    }
    else {
        return "Ask something else...!";
    }
}