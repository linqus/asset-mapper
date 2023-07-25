import { Controller } from '@hotwired/stimulus';

/* stimulusFetch: 'lazy' */
export default class extends Controller {
    connect() {
        this.element.textContent = 'Goodbye Stimulus! Edit me in assets/controllers/goodbye-controller.js';
    }
}
