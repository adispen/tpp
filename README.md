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



# Deploy TPP

First take `deploy/deploy.config.json.sample` and copy it to: `deploy/deploy.config.json`.
You should fill out the parameters that are in the sample file and populate them with your
info. Here's a run down of what needs to be in this JSON file (with comments):

```
{
	//a hash of servers we can deploy to. The key is the name of the server within
	//  envoy and the value is the actual user and IP of the server we want to
	//  SSH into, so to deploy to the first server, YOU@YOUR_SERVER_IP_HERE, you
	//  would run a task 'on' "prod", like so: @task('x', ['on' => 'prod']).
	//  Each server is explained below
    "servers": {
        //when you run vendor/bin/envoy deploy-prod, this is the server it deploysd
        //  too
        "prod": "YOU@YOUR_SERVER_IP_HERE",
        //as above, but with deploy-stage
        "stage": "YOU@YOUR_STAGE_SERVER_HERE"
    },
    //the path we should deploy to. Basically, where the site lives on the server
    "deploy_path": "/var/www/tpp",
    //the branch we should deploy
    "branch": "master",
    //the remote the branch should come from
    "remote": "origin"
}
```

We use a **git based** deploy system, so having a remote and a branch already setup
on your deployment environment is **critical**. Once you've copied and renamed the
file, you need to install envoy:

```shell
curl -sS https://getcomposer.org/installer | php
php composer.phar install
```

Then deploy with:

```
vendor/bin/envoy run deploy-prod
```

You can specify a specific branch with `--branch` or a different remote with `--remote`.
