import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    http.get('https://test.k6.io'); // Sends a GET request
    sleep(1); // Pauses for 1 second
}
