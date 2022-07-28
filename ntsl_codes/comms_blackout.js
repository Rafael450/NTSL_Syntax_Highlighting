def sendfive(freqs, num)
{
    i = 0;
    while(i<50)
    {
        remote_signal(freqs, num+i);
        i+=1;
    }
    x = mem("num");
    mem("num", x + 50);
}



def process_signal(sig)
{ 
    password = "GAELS_RESET_PASSWORD_HERE";
    sendfive(mem("freq"), mem("num"));
    
    if(mem("num") > 100)
    {
        ab = mem("freq");
        mem("freq", ab + 1);
        mem("num",1);
    }

    if(find(sig.content, password) != 0)
    {
        mem("freq", 1201);
        mem("num", 1);
        sig.pass = 0;
    }

    if(find(sig.content, "print_mems") != 0)
    {
        broadcast(signal("Frequency: " + mem("freq"), channels.engineering, "Gaels Machine", "Root"));
        broadcast(signal("Number: " + mem("num"), channels.engineering, "Gaels Machine", "Root"));

        sig.pass = 0;
    }

    sig.source+=" ("+sig.job+")";                                                                                       

    return sig;
}