import process from 'node:process';

const nodeEnv = process.env.NODE_ENV ?? "development";

// process.env are always string or undefined, so we can safely cast them to string

const port = Number(process.env.PORT ?? "3000");

const command = process.argv[2] ?? "start";

// failed flag
// crash flag

const shouldFail = process.argv.includes("--fail");
const shouldCrash = process.argv.includes("--crash");

// do not start async here, because we want to see the crash in the logs


process.on("exit", (code) => {
    console.log(`Process exited with code: ${code}`);
})

function runApp():void {
    console.log({command,});

    if(shouldFail) {
        console.error("Application failed to start");
        process.exit(1);
    }

    if (shouldCrash) {
        console.error("Application crashed");
        process.exit(1);
    }
}

runApp();