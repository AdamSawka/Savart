import { Common } from '@strapi/strapi';
import imageOptimizerService from 'strapi-plugin-image-optimizer/dist/server/services/image-optimizer-service';

export default (plugin: Common.Plugin) => {
    plugin.services['image-manipulation'] = imageOptimizerService();

    return plugin;
};
