<!DOCTYPE html>
<html>
<head>
    <title>Lab 1</title>
</head>
<body>

<h2>Problem 1: Rectangle Area and Perimeter</h2>
<?php
    $length = 10;
    $width = 5;
    $area = $length * $width;
    $perimeter = 2 * ($length + $width);
    
    echo "<p>Length: {$length}</p>";
    echo "<p>Width: {$width}</p>";
    echo "<p>Area: {$area}</p>";
    echo "<p>Perimeter: {$perimeter}</p>";
?>

<h2>Problem 2: VAT Calculation</h2>
<?php
    $amount = 1000;
    $vat = ($amount * 15) / 100;
    $total = $amount + $vat;
    
    echo "<p>Amount: {$amount} Taka</p>";
    echo "<p>VAT (15%): {$vat} Taka</p>";
    echo "<p>Total: {$total} Taka</p>";
?>

<h2>Problem 3: Odd or Even</h2>
<?php
    $number = 17;
    echo "<p>Number: {$number}</p>";
    
    if($number % 2 == 0){
        echo "<p>{$number} is EVEN</p>";
    }else{
        echo "<p>{$number} is ODD</p>";
    }
?>

<h2>Problem 4: Largest of Three Numbers</h2>
<?php
    $num1 = 25;
    $num2 = 50;
    $num3 = 35;
    
    echo "<p>Numbers: {$num1}, {$num2}, {$num3}</p>";
    
    if($num1 >= $num2 && $num1 >= $num3){
        echo "<p>Largest: {$num1}</p>";
    }elseif($num2 >= $num1 && $num2 >= $num3){
        echo "<p>Largest: {$num2}</p>";
    }else{
        echo "<p>Largest: {$num3}</p>";
    }
?>

<h2>Problem 5: Odd Numbers Between 10 to 100</h2>
<?php
    echo "<p>";
    for($i = 10; $i <= 100; $i++){
        if($i % 2 != 0){
            echo $i . " ";
        }
    }
    echo "</p>";
?>

<h2>Problem 6: Search Element in Array</h2>
<?php
    $numbers = [10, 25, 30, 45, 50, 65, 70, 85, 90];
    $search = 50;
    $found = false;
    $position = -1;
    
    echo "<p>Array: ";
    for($i = 0; $i < count($numbers); $i++){
        echo $numbers[$i] . " ";
    }
    echo "</p>";
    
    echo "<p>Search: {$search}</p>";
    
    for($i = 0; $i < count($numbers); $i++){
        if($numbers[$i] == $search){
            $found = true;
            $position = $i;
        }
    }
    
    if($found){
        echo "<p>Found at index: {$position}</p>";
    }else{
        echo "<p>Not found</p>";
    }
?>

<h2>Problem 7: Print Shapes Using Nested Loops</h2>

<h3>Pattern 1: Stars</h3>
<?php
    for($i = 1; $i <= 3; $i++){
        for($j = 1; $j <= $i; $j++){
            echo "* ";
        }
        echo "<br>";
    }
?>

<h3>Pattern 2: Numbers</h3>
<?php
    for($i = 3; $i >= 1; $i--){
        for($j = 1; $j <= $i; $j++){
            echo $j . " ";
        }
        echo "<br>";
    }
?>

<h3>Pattern 3: Letters</h3>
<?php
    $letter = 'A';
    for($i = 1; $i <= 3; $i++){
        for($j = 1; $j <= $i; $j++){
            echo $letter . " ";
            $letter++;
        }
        echo "<br>";
    }
?>

<h2>Problem 8: Print Shapes Using 2D Arrays</h2>

<h3>Pattern 1: Numbers (Decreasing)</h3>
<?php
    $arr1 = [
        [1, 2, 3],
        [1, 2],
        [1]
    ];
    
    for($i = 0; $i < count($arr1); $i++){
        for($j = 0; $j < count($arr1[$i]); $j++){
            echo $arr1[$i][$j] . " ";
        }
        echo "<br>";
    }
?>

<h3>Pattern 2: Letters (Increasing)</h3>
<?php
    $arr3 = [
        ['A'],
        ['B', 'C'],
        ['D', 'E', 'F']
    ];
    
    for($i = 0; $i < count($arr3); $i++){
        for($j = 0; $j < count($arr3[$i]); $j++){
            echo $arr3[$i][$j] . " ";
        }
        echo "<br>";
    }
?>

</body>
</html>