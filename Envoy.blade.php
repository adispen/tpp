@setup
    $config = json_decode(file_get_contents('./deploy/deploy.config.json'));
    $a = '/var/www/tpp';

    $branch = isset($branch) ? $branch: $config->branch;
    $remote = (isset($remote) ? $remote : (isset($config->remote) ? $config->remote : 'origin'));
@endsetup

@servers((array) $config->servers)

@task('deploy-prod', ['on' => 'prod'])
    cd '{{$config->deploy_path}}';
    echo {{$branch}};
    echo {{$remote}};
    #git pull '{{$remote}}' '{{$branch}}';
    pwd;
@endtask
