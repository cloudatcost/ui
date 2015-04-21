require 'cac'
credentials =  { key: "Ty4yXanE8aTumE4yMa4asU3uW", login: "charlie@charliedrage.com"}
p Cac.new(credentials[:key], credentials[:login]).resources
