# Let's Javascript: Angular.js

This repository is my own tutorial for demonstrating angular.js concepts from the beginning to Drupal 8 integration. I am not fond of the phonecat or various other tutorial examples though this probably is little use without looking at the session itself, [Let's Javascript: Angular.js](http://softpixel.com/~mradcliffe/#!/articles/2014/11/lets-javascript-angular-js). The session attempts to introduce Angular.js from a PHP and Drupal developer's view as well as poking fun at trying to implement my personal site as my first attempt at learning angular a couple of years ago.

## Installation

- Build out a web environment. I used [PuPHPet](http://puphpet.com) and the included config.yaml to build the environment.
   - Additionally I installed [Drupal 8.0.0-beta2](https://drupal.org/project/drupal) in `www/drupal8`,
   - and cloned this repository into `www/drupal8/angular`.
- `vagrant up`

I use `vagrant rsync` instead of NFS or Samba or whatever shared folder thing you may use. I like it. Deal with it.

### Angular Stuff

1. Hello, World: `git checkout 3a9af87`
2. Named App: `git checkout 4c4ea7c`
3. Controller: `git checkout 5a0ec0b`
4. Routes: `git checkout 113ecbe`
5. Service Example using JSON: `git checkout 6472b54`

- Filter example commit `fbcaf2a` is ahead of the Drupal 8 stuff. Sorry.

### Drupal Stuff

1. Drupal 8 Rest Export + Angular.js: `git checkout fbcaf2a`.
2. Install Drupal 8.
   - Note: this environment uses [PostgreSQL](http://postgresql.org), and PuPHPet has done everything for you.
3. Enable `rest` and `serialization` core modules.
4. Create views:

- Import the following yaml configuration into your Drupal 8 site via the Configuration Management import interface, or add to your staging directory in the config directory for your Drupal 8 installation:
   - people.yml
   - interests.yml
   - files.yml
- Please note that this should not be used on production with any beta or release-candidate version of Drupal 8.0.0 due to the [#2338559: Never Serialize passwords by default](https://www.drupal.org/node/2338559). Come review this critical issue in 2014 so 8.0.0 can be released. :-)

