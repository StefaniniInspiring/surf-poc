import { Injectable } from '@angular/core';
import { instance } from '../../environments/instances';

@Injectable()
export class ConfigService {
  instanceConfig;
  allInstances;
  instanceName;
  constructor() {
    this.loadInstanceConfig();
  }

  loadInstanceConfig() {
    this.allInstances = instance;
    this.instanceName =
      document.getElementsByTagName('app-root')[0].className == ''
        ? ''
        : document.getElementsByTagName('app-root')[0].className;
    this.instanceConfig = this.allInstances[this.instanceName];
  }

  setInstance(instance) {
    this.instanceName = instance;
    this.instanceConfig = this.allInstances[this.instanceName];
    const appRoot = document.getElementsByTagName('app-root')[0];
    appRoot.classList.add(instance);

    document.title = this.get('pageTitle');

    document.getElementById('logo')['src'] = `assets/logos/logo-${instance}.png`;
    const link = document.querySelector('link[rel*=\'icon\']') ||
            document.createElement('link');
    link['type'] = 'image/x-icon';
    link['rel'] = 'shortcut icon';
    link['href'] = `assets/icons/favicon-${instance}.png`;
  }

  getInstance() {
    return this.instanceName == null ? '' : this.instanceName;
  }

  public get(configName) {
    if (this.instanceName == null) {
      this.instanceName = '';
    }
    return instance[this.instanceName][configName];
  }

  public getConfigFromInstance(rede, configName) {
    return instance[rede][configName];
  }

  public getAll() {
    this.instanceConfig = this.allInstances[this.instanceName];
    return this.instanceConfig;
  }
}
