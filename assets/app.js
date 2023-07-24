/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import Vinyl from './lib/vinyl.js';

const mix = new Vinyl('Awesome Mix Vol. 1', 2014);
console.log(mix.describe());