<html>
  <head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.6.22/dist/css/uikit.min.css" />
</head>
<body>
    <center>
      <div class="uk-child-width-1-2@s uk-grid-match uk-margin-top" uk-grid>
        <div class="uk-child-width-1-2">
          <div class="uk-card uk-card-secondary uk-card-small uk-card-body uk-card-hover uk-margin">
            <h3 class="uk-card-title">IP Address</h3>
            <p><span id="ip-address"><?php echo $_SERVER['REMOTE_ADDR']; ?></span></p>
          </div>
          <div class="uk-card uk-card-secondary uk-card-small uk-card-body uk-card-hover uk-margin">
            <h3 class="uk-card-title">Operating system</h3>
            <p>
              <span id="os">
                <?php
                $userAgent = $_SERVER['HTTP_USER_AGENT'];
                if (strpos($userAgent, 'Macintosh') !== false) {
                  echo 'Mac OS';
                } elseif (strpos($userAgent, 'NT 10.0') !== false) {
                  echo 'Windows 10';
                } elseif (strpos($userAgent, 'NT 6.3') !== false) {
                  echo 'Windows 8.1';
                } elseif (strpos($userAgent, 'NT 6.2') !== false) {
                  echo 'Windows 8.1';
                } elseif (strpos($userAgent, 'NT 6.1') !== false) {
                  echo 'Windows 7';
                } elseif (strpos($userAgent, 'NT 6.0') !== false) {
                  echo 'Windows Vista';
                } elseif (strpos($userAgent, 'NT 5.1') !== false) {
                  echo 'Windows XP';
                } elseif (strpos($userAgent, 'Android') !== false) {
                  echo 'Android';
                } else {
                  echo "<p>Unknown. See user agent below:</p><p>" . $userAgent . "</p>";
                }
                ?>
              </span>
            </p>
          </div>
        </div>
      </div>
    </center>
  </body>
</html>