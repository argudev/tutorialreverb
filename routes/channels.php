<?php

use Illuminate\Support\Facades\Broadcast;


Broadcast::channel('tutorial', function () {
    return true;
});