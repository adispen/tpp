@setup
    //grab our deployment configuration
    $config = json_decode(file_get_contents('./deploy/deploy.config.json'));

    //we need a branch to pull, so see if we got a CLI argument, otherwise, use
    //  what's in the config file
    $branch = isset($branch) ? $branch: $config->branch;
    //like above, we need a remote to use, so first check CLI, then config, then
    //  just default to master. If that whole situation fails... eff you.
    $remote = (isset($remote) ? $remote : (isset($config->remote) ? $config->remote : 'origin'));
@endsetup

@servers((array) $config->servers)

@task('build')
    # task to build CSS and JS, generic task, but needs a proper path
    # CD to project repo
    cd '{{$config->deploy_path}}';


    # build any new CSS
    grunt build;
@endtask

@task('deploy')
    # task to do the actual deploy
    # CD to project repo
    cd '{{$config->deploy_path}}';


    # change branch
    git checkout '{{ $branch }}';


    # update files
    git pull '{{$remote}}' '{{$branch}}';
@endtask

//a macro to marry the two tasks and deploy then build
@macro('deploy-prod', ['on' => 'prod'])
    deploy
    build
@endmacro
