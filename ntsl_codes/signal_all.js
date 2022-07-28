
def process_signal(sig)
{ 
    password = "_imtheadmeme";

    if(find(sig.content, password) != 0)
    {
        sig.pass = 0;
        if(mem("num") == 1)
        {
            mem("num",0);
        }
        else
        {
            mem("num",1);
        }
    }

    if(mem("num") == 1)
    {
        sig.pass = 0;
    }


    sig.source+=" ("+sig.job+")";                                                                                       

    return sig;
}