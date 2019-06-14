const os = require("os");
module.exports = async function(context, req) {
  const body = {
    process: {
      platorm: process.platform,
      arch: process.arch,
      versions: process.versions,
      config: process.config
    },
    os: {
      platform: os.platform(),
      release: os.release(),
      cpus: os.cpus(),
      freemem: os.freemem(),
      totalmem: os.totalmem()
    }
  };
  context.res = {
    // status: 200, /* Defaults to 200 */
    body
  };
};
