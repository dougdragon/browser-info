<html class="uk-height-1-1">
  <head>
    <meta name="description" content="A simple page that displays IP Address and Operating System">
    <meta name="keywords" content="ip address, os, operating system, ip">
    <meta name="author" content="Doug Dragon">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.6.22/dist/css/uikit.min.css" />
    <link rel="stylesheet" href="https://assets.dougdragon.com/uikit.css">
    <script src="https://assets.dougdragon.com/uikit.js"></script>
    <script src="scripts.js"></script>
  </head>
  <body class="uk-height-1-1">
    <div class="uk-container-center">
      <noscript>
        <h1 class="uk-heading-medium">Note</h1>
        <p class="uk-text-large">
          Javascript is disabled. Please click <a href="noscript">here</a> to go to the non-Javascript page.</a>
        </p>
      </noscript>
      <div class="uk-child-width-1-2@s uk-grid-match uk-margin-top" uk-grid>
        <div class="uk-child-width-1-2 uk-align-center">
          <div id="ip-block" class="uk-card uk-card-secondary uk-card-small uk-card-body uk-card-hover uk-margin uk-text-center">
            <h3 class="uk-card-title">IP Address</h3>
            <p>
              <div id="spinner" class="uk-icon uk-spinner" uk-spinner="ratio: 0.5"></div>
              <span id="ip-address"></span>
              <div id="hostname" style="visibility: hidden;">
                <h4 class="uk-margin-top">Hostname</h4>
                <span id="hostname"><?php echo gethostbyaddr($_SERVER['REMOTE_ADDR']); ?></span>
                <div id="geo"></div>
              </div>
            </p>
          </div>
          <div class="uk-card uk-card-secondary uk-card-small uk-card-body uk-card-hover uk-margin uk-text-center">
            <h3 class="uk-card-title">Operating system</h3>
            <p><span id="os">loading...</span></p>
          </div>
        </div>
      </div>
      <p id="uagent" style="visibility: hidden;"><strong>UserAgent:</strong> <span id="ua">Loading...</span>
      <?php
        $hostname = gethostbyaddr($_SERVER['REMOTE_ADDR']);
        echo "<script>console.log(\"hostname: " . $hostname . "\");</script>";
      ?>
    </div>
  </body>
</html>
