<?php

$data = array_merge($_GET, $_POST);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Form Results</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #e8eef5;
            margin: 0;
            padding: 40px;
        }

        .container {
            max-width: 800px;
            margin: auto;
            background-color: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        h1 {
            text-align: center;
            color: #183c67;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 25px;
        }

        th {
            background-color: #183c67;
            color: white;
            padding: 12px;
            text-align: left;
        }

        td {
            padding: 12px;
            border: 1px solid #ccc;
        }

        tr:nth-child(even) {
            background-color: #f2f5f8;
        }

        .back {
            display: block;
            margin-top: 25px;
            text-align: center;
        }

        .back a {
            color: #183c67;
            font-weight: bold;
            text-decoration: none;
        }

        .back a:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>

<div class="container">

    <h1>Submitted Information</h1>

    <table>
        <tr>
            <th>Form Field</th>
            <th>Submitted Value</th>
        </tr>

        <?php

        foreach ($data as $key => $value) {

            echo "<tr>";

            echo "<td>" . htmlspecialchars($key) . "</td>";

            echo "<td>";

            if (is_array($value)) {

                foreach ($value as $arrayValue) {
                    echo htmlspecialchars($arrayValue) . "<br>";
                }

            } else {

                echo htmlspecialchars($value);

            }

            echo "</td>";

            echo "</tr>";
        }

        ?>

    </table>

    <div class="back">
        <a href="index.html">Return to Form</a>
    </div>

</div>

</body>
</html>