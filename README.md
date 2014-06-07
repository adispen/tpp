# Install TPP

```shell
git pull origin master
apt-get install ruby1.9.1
gem install foundation
apt-get install nodejs
# May need to run the below
# apt-get install npm
npm install -g bower grunt-cli

# If you get an error about missing sources, update nodjes like so:
#   apt-get purge nodejs npm
#   apt-get install -y python-software-properties python g++ make
#   sudo add-apt-repository ppa:chris-lea/node.js
# if the above command fails, use:
#   apt-get install software-properties-common
#	sudo apt-get update
# Now repeat the above npm steps.

# you need a local grunt
npm install grunt grunt-sass grunt-contrib-watch
bower install
grunt build


```
