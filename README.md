`${API}admin/addstats` and `${API}admin/editstats`, add the fields:
numberOfEmployees?: string;
employessWithDisability?: string;
policy?:string;

duplicate the following endpoints into these respectively
(same functionality just change db model to partners)
partner model is same as logo model: 
{img: string; _id: string;}
`${API}admin/addlogo` => `${API}admin/addpartner` (add a partner logo)
`${API}admin/logo`=> `${API}admin/partners` (get all partners logos)