
/*
 initiates the process of building the function
*/

var check_if_function = require('./arrow_check');
var build_beginning_of_function = require('./arrow_beginning');
var build_body_of_function = require('./arrow_body');

 function initiate_arrow(data_index, line_number, boundry_parameters_for_backtracking_paren) { 

  var return_object = {};

  if(check_if_function(data_index) === false) { 
   return_object.is_function = false;
   return return_object;
  }

  return_object.is_function = true;
  return_object.beginning_line_number = line_number;

  var beginning_function_ = build_beginning_of_function(data_index, boundry_parameters_for_backtracking_paren);

  return_object.build_string = beginning_function_.build_string + "=>"; //doing this wrong.. need to look at the beginning on the other side or just back track differently. would only woro for async
  return_object.found_async = beginning_function_.found_async;
  return_object.found_name = beginning_function_.found_name; 
  return_object.name = beginning_function_.name; 
  return_object.found_type = beginning_function_.found_type;
  return_object.type = beginning_function_.type; 
  return_object.parameters = beginning_function_.parameters;
  return_object.is_enclosed = beginning_function_.is_enclosed; 
  return_object.enclosed_opening_count = beginning_function_.enclosed_count; 
  return_object.beginning_index = beginning_function_.beginning_index;

  data_index = data_index + 2; 

  var body_of_function = build_body_of_function(data_index, line_number, return_object.enclosed_opening_count);

  return_object.build_string += body_of_function.build_string;
  return_object.ending_line_number = body_of_function.ending_line_number;
  return_object.ending_data_index = body_of_function.ending_data_index;
  return_object.is_invoked = body_of_function.is_invoked;

  return return_object;

 }

module.exports = initiate_arrow;  
  
  
