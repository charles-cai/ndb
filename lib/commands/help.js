exports.text = "                                 \n\
help                                             \n\
                                                 \n\
commands:                                        \n\
                                                 \n\
  l / list - list the current code               \n\
  h / help - this help                           \n\
  rw <json> - send raw (\"raw write\") json text \n\
";

exports.run = function() {
  var ndb = this.calling_module,
      puts = ndb.Helpers.puts;

  puts(this.text);
  ndb.EventListener.prompt();
};