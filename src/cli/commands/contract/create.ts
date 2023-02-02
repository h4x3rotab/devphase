import { RunMode } from '@/def';
import { BaseCommand } from '@/service/BaseCommand';
import { ContractManager } from '@/service/project/ContractManager';
import { Flags } from '@oclif/core';


export class ContractCreateCommand
    extends BaseCommand<typeof ContractCreateCommand>
{
    
    public static summary : string = 'Creates new contract from template';
    
    public static flags = {
        name: Flags.string({
            summary: 'Contract name',
            char: 'n',
            required: true,
        })
    };
    
    public async run ()
    {
        await this.runtimeContext.initContext(RunMode.Simple);
        await this.runtimeContext.requestProjectDirectory();
        
        const contractManager = new ContractManager(this.runtimeContext);
        
        const result = await contractManager.createNew({
            name: this.flags.name,
        });
        
        return result;
    }
    
}
