<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="/style/mainStyle.css">
	<title>MS Paint Adventures</title>
	<script src="https://cdn.jsdelivr.net/npm/@dmester/sffjs@1.17.0/dist/stringformat.min.js"></script>
</head>
<body>
	<header>
		<!-- TODO: Turn this into a reusable component -->
		<nav>
			<ul>
				<li><img src="/images/logo-mspa.png" alt="MSPA logo"></li>
				<li><a href="index.php" class="active">Home</a></li>
				<li><a href="/pages/adventures.php">Adventures</a></li>
				<li><a href="/pages/characters.php">Characters</a></li>
			</ul>
		</nav>
	</header>

	<main>
		<?php echo "Hello world!" ?>
	</main>

	<footer>
		&copy; Midas V, <?= date("d-m-Y H:i") ?>
	</footer>
</body>
</html>